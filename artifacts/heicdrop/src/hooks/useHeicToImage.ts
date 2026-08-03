import { useState, useCallback } from 'react';
import heic2any from 'heic2any';
import JSZip from 'jszip';

export type ImageFormat = 'jpeg' | 'png';

export type ImageConversionOptions = {
  format: ImageFormat;
  quality: number; // 1–100 (only applies to JPEG)
};

export type ImageConversionResult = {
  // Single file: one blob
  // Multiple files: zip blob
  blob: Blob;
  filename: string; // e.g. "photo.jpg" or "heic-images.zip"
  count: number;
  totalBytes: number;
};

export function useHeicToImage() {
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressLabel, setProgressLabel] = useState('');
  const [result, setResult] = useState<ImageConversionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const convertFiles = useCallback(async (files: File[], options: ImageConversionOptions) => {
    setIsConverting(true);
    setProgress(0);
    setResult(null);
    setError(null);

    try {
      const ext = options.format === 'jpeg' ? 'jpg' : 'png';
      const mimeType = options.format === 'jpeg' ? 'image/jpeg' : 'image/png';
      const convertedBlobs: { name: string; blob: Blob }[] = [];

      for (let i = 0; i < files.length; i++) {
        setProgressLabel(`Converting file ${i + 1} of ${files.length}...`);
        await new Promise(r => setTimeout(r, 30));

        const raw = await heic2any({
          blob: files[i],
          toType: mimeType,
          quality: options.format === 'jpeg' ? options.quality / 100 : 1,
        });

        const blob = Array.isArray(raw) ? raw[0] : raw;
        const baseName = files[i].name.replace(/\.(heic|heif)$/i, '');
        convertedBlobs.push({ name: `${baseName}.${ext}`, blob });

        setProgress(((i + 1) / files.length) * 100);
      }

      if (convertedBlobs.length === 1) {
        // Single file — just return the blob directly
        setResult({
          blob: convertedBlobs[0].blob,
          filename: convertedBlobs[0].name,
          count: 1,
          totalBytes: convertedBlobs[0].blob.size,
        });
      } else {
        // Multiple files — zip them
        setProgressLabel('Bundling into ZIP...');
        await new Promise(r => setTimeout(r, 30));

        const zip = new JSZip();
        let total = 0;
        for (const { name, blob } of convertedBlobs) {
          zip.file(name, blob);
          total += blob.size;
        }

        const zipBlob = await zip.generateAsync({ type: 'blob' });
        setResult({
          blob: zipBlob,
          filename: 'heic-images.zip',
          count: convertedBlobs.length,
          totalBytes: total,
        });
      }
    } catch (err: any) {
      setError(err?.message || 'Conversion failed. Please try again.');
    } finally {
      setIsConverting(false);
    }
  }, []);

  return {
    isConverting,
    progress,
    progressLabel,
    result,
    error,
    convertFiles,
    reset: () => {
      setResult(null);
      setProgress(0);
      setProgressLabel('');
      setError(null);
    },
  };
}