import { useState, useCallback, useRef } from 'react';
import heic2any from 'heic2any';
import { PDFDocument } from 'pdf-lib';

const PAGE_SIZES: Record<string, [number, number]> = {
  A4: [595.28, 841.89],
  Letter: [612, 792],
  Legal: [612, 1008],
};

export type ConversionOptions = {
  pageSize: 'A4' | 'Letter' | 'Legal' | 'Fit';
  orientation: 'portrait' | 'landscape' | 'auto';
  quality: number;
};

export type ConversionResult = {
  pdfBlob: Blob;
  pages: number;
  sizeBytes: number;
};

export function useHeicConverter() {
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [progressLabel, setProgressLabel] = useState('');
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const convertFiles = useCallback(
    async (files: File[], options: ConversionOptions) => {
      setIsConverting(true);
      setProgress(0);
      setResult(null);
      setError(null);

      try {
        const pdf = await PDFDocument.create();

        for (let i = 0; i < files.length; i++) {
          setProgressLabel(`Processing file ${i + 1} of ${files.length}...`);
          // Add small delay to allow UI to update
          await new Promise((resolve) => setTimeout(resolve, 50));

          const file = files[i];

          // Convert HEIC -> JPEG blob
          const jpegBlobResult = await heic2any({
            blob: file,
            toType: 'image/jpeg',
            quality: options.quality / 100,
          });

          // heic2any can return Blob or Blob[]
          const jpegBlob = Array.isArray(jpegBlobResult)
            ? jpegBlobResult[0]
            : jpegBlobResult;

          const arrayBuffer = await jpegBlob.arrayBuffer();
          const jpegImage = await pdf.embedJpg(arrayBuffer);

          let [pageW, pageH] =
            PAGE_SIZES[options.pageSize] ?? [jpegImage.width, jpegImage.height];

          // Auto orientation
          if (options.orientation === 'auto') {
            if (jpegImage.width > jpegImage.height && pageW < pageH)
              [pageW, pageH] = [pageH, pageW];
            if (jpegImage.height > jpegImage.width && pageH < pageW)
              [pageW, pageH] = [pageH, pageW];
          } else if (options.orientation === 'landscape') {
            if (pageW < pageH) [pageW, pageH] = [pageH, pageW];
          }

          if (options.pageSize === 'Fit') {
            pageW = jpegImage.width;
            pageH = jpegImage.height;
          }

          const page = pdf.addPage([pageW, pageH]);

          // Scale image to fit page preserving aspect ratio
          const scale = Math.min(
            pageW / jpegImage.width,
            pageH / jpegImage.height
          );
          const drawW = jpegImage.width * scale;
          const drawH = jpegImage.height * scale;

          page.drawImage(jpegImage, {
            x: (pageW - drawW) / 2,
            y: (pageH - drawH) / 2,
            width: drawW,
            height: drawH,
          });

          setProgress(((i + 1) / files.length) * 100);
        }

        setProgressLabel('Finalizing PDF...');
        await new Promise((resolve) => setTimeout(resolve, 50));
        
        const pdfBytes = await pdf.save();
        const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

        setResult({
          pdfBlob,
          pages: files.length,
          sizeBytes: pdfBlob.size,
        });
      } catch (err: any) {
        console.error('Conversion failed:', err);
        setError(err.message || 'Failed to convert HEIC to PDF.');
      } finally {
        setIsConverting(false);
      }
    },
    []
  );

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
