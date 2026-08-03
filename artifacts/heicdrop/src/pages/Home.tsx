import React, { useCallback, useState } from 'react';
import { Download, FileIcon, Shield, Zap, Smartphone, FileText, Image as ImageIcon, X, ImagePlus } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useHeicConverter, ConversionOptions } from '@/hooks/useHeicConverter';
import { useHeicToImage, ImageConversionOptions } from '@/hooks/useHeicToImage';
import { useToast } from '@/components/ui/toast/use-toast';
import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose } from '@/components/ui/toast/toast';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export function Home() {
  useDocumentTitle('HeicDrop — Convert HEIC to PDF Free & Private');
  const { toast } = useToast();
  
  // --- PDF Converter State ---
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [options, setOptions] = useState<ConversionOptions>({
    pageSize: 'A4',
    orientation: 'auto',
    quality: 90,
  });

  const { isConverting, progress, progressLabel, result, error, convertFiles, reset } = useHeicConverter();

  // --- Image Converter State ---
  const [imgFiles, setImgFiles] = useState<File[]>([]);
  const [isImgDragging, setIsImgDragging] = useState(false);
  const [imgOptions, setImgOptions] = useState<ImageConversionOptions>({
    format: 'jpeg',
    quality: 90,
  });

  const { 
    isConverting: isImgConverting, 
    progress: imgProgress, 
    progressLabel: imgProgressLabel, 
    result: imgResult, 
    error: imgError, 
    convertFiles: convertImgFiles, 
    reset: resetImg 
  } = useHeicToImage();

  // --- PDF Handlers ---
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processSelectedFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processSelectedFiles(Array.from(e.target.files));
    }
    e.target.value = '';
  };

  const processSelectedFiles = (newFiles: File[]) => {
    const validFiles = newFiles.filter(f => {
      const ext = f.name.toLowerCase().split('.').pop();
      return ['heic', 'heif'].includes(ext || '') || 
             f.type === 'image/heic' || 
             f.type === 'image/heif';
    });
    
    if (validFiles.length < newFiles.length) {
      toast({
        title: "Invalid file type",
        description: "Only .heic and .heif files are supported.",
        variant: "destructive",
      });
    }

    if (validFiles.length > 0) {
      setFiles(prev => [...prev, ...validFiles]);
      reset(); 
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    if (files.length === 1) reset(); 
  };

  const handleConvert = () => {
    if (files.length === 0) return;
    convertFiles(files, options);
  };

  const handleDownload = () => {
    if (!result) return;
    const url = URL.createObjectURL(result.pdfBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'converted.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleConvertMore = () => {
    setFiles([]);
    reset();
  };

  // --- Image Handlers ---
  const handleImgDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsImgDragging(true);
  };

  const handleImgDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsImgDragging(false);
  };

  const handleImgDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsImgDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processSelectedImgFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleImgFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processSelectedImgFiles(Array.from(e.target.files));
    }
    e.target.value = '';
  };

  const processSelectedImgFiles = (newFiles: File[]) => {
    const validFiles = newFiles.filter(f => {
      const ext = f.name.toLowerCase().split('.').pop();
      return ['heic', 'heif'].includes(ext || '') || 
             f.type === 'image/heic' || 
             f.type === 'image/heif';
    });
    
    if (validFiles.length < newFiles.length) {
      toast({
        title: "Invalid file type",
        description: "Only .heic and .heif files are supported.",
        variant: "destructive",
      });
    }

    if (validFiles.length > 0) {
      setImgFiles(prev => [...prev, ...validFiles]);
      resetImg();
    }
  };

  const removeImgFile = (index: number) => {
    setImgFiles(prev => prev.filter((_, i) => i !== index));
    if (imgFiles.length === 1) resetImg(); 
  };

  const handleConvertImg = () => {
    if (imgFiles.length === 0) return;
    convertImgFiles(imgFiles, imgOptions);
  };

  const handleImgDownload = () => {
    if (!imgResult) return;
    const url = URL.createObjectURL(imgResult.blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = imgResult.filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleConvertMoreImg = () => {
    setImgFiles([]);
    resetImg();
  };

  // --- Effects ---
  React.useEffect(() => {
    if (error) {
      toast({
        title: "Conversion Failed",
        description: error,
        variant: "destructive",
      });
    }
  }, [error, toast]);

  React.useEffect(() => {
    if (imgError) {
      toast({
        title: "Image Conversion Failed",
        description: imgError,
        variant: "destructive",
      });
    }
  }, [imgError, toast]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        
        {/* HERO */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            Convert <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c5ce7] to-[#e17055]">HEIC</span> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c5ce7] to-[#e17055]">PDF</span>
            <br className="hidden sm:block" /> Instantly & Privately
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Your iPhone photos stay on your device. No uploads, no sign-ups, no watermarks.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-foreground/80">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-green-500" /> 100% Private</span>
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-500" /> Instant</span>
            <span className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-blue-500" /> iPhone Support</span>
            <span className="flex items-center gap-2"><FileText className="w-4 h-4 text-purple-500" /> Multi-Page</span>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1px] bg-border rounded-2xl overflow-hidden mb-12 shadow-sm">
          <div className="bg-card p-6 text-center">
            <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6c5ce7] to-[#e17055]">50K+</div>
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1">Conversions This Month</div>
          </div>
          <div className="bg-card p-6 text-center">
            <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6c5ce7] to-[#e17055]">100%</div>
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1">Privacy Guaranteed</div>
          </div>
          <div className="bg-card p-6 text-center">
            <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6c5ce7] to-[#e17055]">0</div>
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1">Watermarks. Ever.</div>
          </div>
        </div>

        {/* CONVERTER APP */}
        <div className="max-w-3xl mx-auto">
          
          {/* Default State: Dropzone */}
          {!result && !isConverting && files.length === 0 && (
            <div 
              className={`relative border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-300 ease-out cursor-pointer group ${
                isDragging 
                  ? 'border-[#6c5ce7] bg-[#6c5ce7]/5 scale-[1.02]' 
                  : 'border-border bg-card hover:border-[#6c5ce7]/50 hover:bg-[#f8f6ff]'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input 
                type="file" 
                multiple 
                accept=".heic,.heif,image/heic,image/heif"
                onChange={handleFileInput}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                aria-label="Upload HEIC files"
              />
              <div className="pointer-events-none">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6c5ce7]/10 to-[#e17055]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <ImageIcon className="w-10 h-10 text-[#6c5ce7]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Drop your HEIC / HEIF files here</h3>
                <p className="text-muted-foreground mb-8">or click to browse your photos</p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-muted px-3 py-1 rounded-md text-xs font-semibold text-muted-foreground">📷 HEIC</span>
                  <span className="bg-muted px-3 py-1 rounded-md text-xs font-semibold text-muted-foreground">📷 HEIF</span>
                  <span className="bg-muted px-3 py-1 rounded-md text-xs font-semibold text-muted-foreground">📄 Multi-page PDF</span>
                </div>
              </div>
            </div>
          )}

          {/* Files Selected & Controls */}
          {files.length > 0 && !result && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Dropzone Mini (when files exist) */}
              <div className="flex justify-between items-end mb-4">
                <h3 className="font-semibold text-lg">{files.length} File{files.length !== 1 ? 's' : ''} Selected</h3>
                <label className="text-sm font-medium text-[#6c5ce7] hover:text-[#5a4bd1] cursor-pointer">
                  + Add More
                  <input 
                    type="file" 
                    multiple 
                    accept=".heic,.heif,image/heic,image/heif"
                    onChange={handleFileInput}
                    className="hidden" 
                  />
                </label>
              </div>

              {/* File List */}
              <div className="bg-card border rounded-2xl p-2 mb-6 max-h-60 overflow-y-auto shadow-sm">
                {files.map((file, i) => (
                  <div key={`${file.name}-${i}`} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-xl transition-colors group">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <FileImage file={file} />
                      <div className="overflow-hidden">
                        <p className="text-sm font-medium truncate max-w-[200px] sm:max-w-xs">{file.name}</p>
                        <p className="text-xs text-muted-foreground">{formatBytes(file.size)}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFile(i)}
                      className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full transition-colors opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                      aria-label="Remove file"
                      disabled={isConverting}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Controls */}
              <div className="bg-card border rounded-2xl p-6 shadow-sm mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Page Size</label>
                    <select 
                      value={options.pageSize}
                      onChange={(e) => setOptions({...options, pageSize: e.target.value as any})}
                      className="w-full bg-background border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#6c5ce7]/50 focus:border-[#6c5ce7] transition-all"
                      disabled={isConverting}
                    >
                      <option value="A4">A4</option>
                      <option value="Letter">Letter</option>
                      <option value="Legal">Legal</option>
                      <option value="Fit">Fit to Image</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Orientation</label>
                    <select 
                      value={options.orientation}
                      onChange={(e) => setOptions({...options, orientation: e.target.value as any})}
                      className="w-full bg-background border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#6c5ce7]/50 focus:border-[#6c5ce7] transition-all"
                      disabled={isConverting}
                    >
                      <option value="portrait">Portrait</option>
                      <option value="landscape">Landscape</option>
                      <option value="auto">Auto (based on image)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Image Quality</label>
                    <span className="text-sm font-bold text-[#6c5ce7]">{options.quality}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="50" max="100" 
                    value={options.quality}
                    onChange={(e) => setOptions({...options, quality: parseInt(e.target.value)})}
                    className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-[#6c5ce7]"
                    disabled={isConverting}
                  />
                </div>
              </div>

              {/* Action Area */}
              {isConverting ? (
                <div className="bg-card border rounded-2xl p-6 text-center shadow-sm">
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden mb-4">
                    <div 
                      className="h-full bg-gradient-to-r from-[#6c5ce7] to-[#e17055] transition-all duration-300 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground animate-pulse">{progressLabel}</p>
                </div>
              ) : (
                <button 
                  onClick={handleConvert}
                  className="w-full py-4 px-6 bg-gradient-to-r from-[#6c5ce7] to-[#e17055] hover:opacity-90 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  Convert to PDF
                </button>
              )}
            </div>
          )}

          {/* Result Area */}
          {result && (
            <div className="animate-in zoom-in-95 duration-500">
              <div className="bg-card border rounded-3xl p-8 text-center shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                
                <h2 className="text-2xl font-bold mb-2">Conversion Complete!</h2>
                <p className="text-muted-foreground mb-8">Your HEIC files have been successfully converted to PDF.</p>
                
                <div className="flex flex-wrap justify-center gap-6 mb-8 bg-muted/50 rounded-2xl p-4 inline-flex mx-auto">
                  <div className="text-center px-4">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Pages</div>
                    <div className="text-xl font-bold">{result.pages}</div>
                  </div>
                  <div className="w-px bg-border"></div>
                  <div className="text-center px-4">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Size</div>
                    <div className="text-xl font-bold">{formatBytes(result.sizeBytes)}</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <button 
                    onClick={handleDownload}
                    className="flex-1 py-4 px-6 bg-foreground text-background hover:bg-foreground/90 font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </button>
                  <button 
                    onClick={handleConvertMore}
                    className="flex-1 py-4 px-6 bg-muted hover:bg-muted/80 text-foreground font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    Convert More
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* IMAGE CONVERTER APP */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block py-1 px-3 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-4">Image Converter</span>
            <h2 className="text-3xl font-bold mb-4">HEIC to JPG / PNG</h2>
            <p className="text-muted-foreground">Convert iPhone photos to standard image formats</p>
          </div>

          {/* Default State: Dropzone */}
          {!imgResult && !isImgConverting && imgFiles.length === 0 && (
            <div 
              className={`relative border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-300 ease-out cursor-pointer group ${
                isImgDragging 
                  ? 'border-teal-500 bg-teal-500/5 scale-[1.02]' 
                  : 'border-border bg-card hover:border-teal-500/50 hover:bg-teal-50/50 dark:hover:bg-teal-950/10'
              }`}
              onDragOver={handleImgDragOver}
              onDragLeave={handleImgDragLeave}
              onDrop={handleImgDrop}
            >
              <input 
                type="file" 
                multiple 
                accept=".heic,.heif,image/heic,image/heif"
                onChange={handleImgFileInput}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                aria-label="Upload HEIC files for image conversion"
              />
              <div className="pointer-events-none">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <ImagePlus className="w-10 h-10 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Drop HEIC photos here to convert</h3>
                <p className="text-muted-foreground mb-8">or click to browse your files</p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-muted px-3 py-1 rounded-md text-xs font-semibold text-muted-foreground">📷 HEIC to JPG</span>
                  <span className="bg-muted px-3 py-1 rounded-md text-xs font-semibold text-muted-foreground">📷 HEIC to PNG</span>
                </div>
              </div>
            </div>
          )}

          {/* Files Selected & Controls */}
          {imgFiles.length > 0 && !imgResult && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              <div className="flex justify-between items-end mb-4">
                <h3 className="font-semibold text-lg">{imgFiles.length} File{imgFiles.length !== 1 ? 's' : ''} Selected</h3>
                <label className="text-sm font-medium text-teal-600 hover:text-teal-700 cursor-pointer">
                  + Add More
                  <input 
                    type="file" 
                    multiple 
                    accept=".heic,.heif,image/heic,image/heif"
                    onChange={handleImgFileInput}
                    className="hidden" 
                  />
                </label>
              </div>

              {/* File List */}
              <div className="bg-card border rounded-2xl p-2 mb-6 max-h-60 overflow-y-auto shadow-sm">
                {imgFiles.map((file, i) => (
                  <div key={`${file.name}-${i}`} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-xl transition-colors group">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-10 h-10 bg-teal-500/10 text-teal-500 rounded-lg flex items-center justify-center shrink-0">
                        <ImageIcon className="w-5 h-5" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-sm font-medium truncate max-w-[200px] sm:max-w-xs">{file.name}</p>
                        <p className="text-xs text-muted-foreground">{formatBytes(file.size)}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeImgFile(i)}
                      className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full transition-colors opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                      aria-label="Remove file"
                      disabled={isImgConverting}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Controls */}
              <div className="bg-card border rounded-2xl p-6 shadow-sm mb-6">
                <div className="mb-6">
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Output Format</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setImgOptions({...imgOptions, format: 'jpeg'})}
                      className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-all ${
                        imgOptions.format === 'jpeg' 
                          ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-md' 
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                      disabled={isImgConverting}
                    >
                      JPG
                    </button>
                    <button
                      onClick={() => setImgOptions({...imgOptions, format: 'png'})}
                      className={`flex-1 py-2 px-4 rounded-xl text-sm font-bold transition-all ${
                        imgOptions.format === 'png' 
                          ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-md' 
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                      disabled={isImgConverting}
                    >
                      PNG
                    </button>
                  </div>
                </div>
                
                {imgOptions.format === 'jpeg' && (
                  <div className="animate-in fade-in duration-300">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Image Quality</label>
                      <span className="text-sm font-bold text-teal-600">{imgOptions.quality}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="50" max="100" 
                      value={imgOptions.quality}
                      onChange={(e) => setImgOptions({...imgOptions, quality: parseInt(e.target.value)})}
                      className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-teal-500"
                      disabled={isImgConverting}
                    />
                  </div>
                )}
              </div>

              {/* Action Area */}
              {isImgConverting ? (
                <div className="bg-card border rounded-2xl p-6 text-center shadow-sm">
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden mb-4">
                    <div 
                      className="h-full bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-300 ease-out"
                      style={{ width: `${imgProgress}%` }}
                    />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground animate-pulse">{imgProgressLabel}</p>
                </div>
              ) : (
                <button 
                  onClick={handleConvertImg}
                  className="w-full py-4 px-6 bg-gradient-to-r from-teal-500 to-blue-500 hover:opacity-90 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <ImageIcon className="w-5 h-5" />
                  Convert to {imgOptions.format === 'jpeg' ? 'JPG' : 'PNG'}
                </button>
              )}
            </div>
          )}

          {/* Result Area */}
          {imgResult && (
            <div className="animate-in zoom-in-95 duration-500">
              <div className="bg-card border rounded-3xl p-8 text-center shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-blue-500"></div>
                
                <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                
                <h2 className="text-2xl font-bold mb-2">Conversion Complete!</h2>
                <p className="text-muted-foreground mb-8">Your images have been successfully converted.</p>
                
                <div className="flex flex-wrap justify-center gap-6 mb-8 bg-muted/50 rounded-2xl p-4 inline-flex mx-auto">
                  <div className="text-center px-4">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Images</div>
                    <div className="text-xl font-bold">{imgResult.count}</div>
                  </div>
                  <div className="w-px bg-border"></div>
                  <div className="text-center px-4">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Format</div>
                    <div className="text-xl font-bold uppercase">{imgResult.count > 1 ? 'ZIP' : (imgResult.filename.split('.').pop() || 'IMG')}</div>
                  </div>
                  <div className="w-px bg-border"></div>
                  <div className="text-center px-4">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Size</div>
                    <div className="text-xl font-bold">{formatBytes(imgResult.totalBytes)}</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <button 
                    onClick={handleImgDownload}
                    className="flex-1 py-4 px-6 bg-foreground text-background hover:bg-foreground/90 font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download {imgResult.count > 1 ? `ZIP (${imgResult.count})` : imgResult.filename.split('.').pop()?.toUpperCase() || 'Image'}
                  </button>
                  <button 
                    onClick={handleConvertMoreImg}
                    className="flex-1 py-4 px-6 bg-muted hover:bg-muted/80 text-foreground font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    Convert More
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* FAQ SECTION */}
        <div className="mt-32 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about converting HEIC to PDF</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="bg-card border rounded-2xl mb-4 px-2 overflow-hidden shadow-sm data-[state=open]:border-[#6c5ce7]/30 transition-colors">
              <AccordionTrigger className="hover:no-underline px-4 py-4 text-left font-semibold">What is a HEIC file?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground leading-relaxed">
                <strong className="text-foreground">HEIC</strong> (High Efficiency Image Format) is Apple's default photo format for iPhones (iOS 11+). It offers <strong className="text-foreground">up to 50% smaller file sizes</strong> than JPG while maintaining the same quality. However, HEIC files <strong className="text-foreground">don't open on Windows, Android, or many websites</strong> — which is why converting them to PDF is so useful.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-card border rounded-2xl mb-4 px-2 overflow-hidden shadow-sm data-[state=open]:border-[#6c5ce7]/30 transition-colors">
              <AccordionTrigger className="hover:no-underline px-4 py-4 text-left font-semibold">Is my data safe? Do you store my images?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground leading-relaxed">
                <strong className="text-foreground">100% safe.</strong> Your HEIC files <strong className="text-foreground">never leave your device</strong>. All conversion happens directly in your browser using JavaScript. We don't upload, store, or see any of your images. <strong className="text-foreground">Privacy is our #1 priority.</strong>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-card border rounded-2xl mb-4 px-2 overflow-hidden shadow-sm data-[state=open]:border-[#6c5ce7]/30 transition-colors">
              <AccordionTrigger className="hover:no-underline px-4 py-4 text-left font-semibold">How do I convert multiple HEIC files to one PDF?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground leading-relaxed">
                Just <strong className="text-foreground">select multiple HEIC files</strong> when uploading (hold Ctrl/Cmd or select multiple on mobile). They will be combined into a <strong className="text-foreground">single multi-page PDF</strong> in the order you select them. Perfect for photo albums, receipts, or document scans.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border rounded-2xl mb-4 px-2 overflow-hidden shadow-sm data-[state=open]:border-[#6c5ce7]/30 transition-colors">
              <AccordionTrigger className="hover:no-underline px-4 py-4 text-left font-semibold">What are the file size limits?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground leading-relaxed">
                Since all processing happens locally, the limit depends on your <strong className="text-foreground">device's memory</strong>. Most modern browsers can handle <strong className="text-foreground">100+ HEIC files</strong> at once. For very large batches (200+ images), consider splitting into smaller groups.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border rounded-2xl mb-4 px-2 overflow-hidden shadow-sm data-[state=open]:border-[#6c5ce7]/30 transition-colors">
              <AccordionTrigger className="hover:no-underline px-4 py-4 text-left font-semibold">Can I convert HEIC to PDF on my iPhone?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Yes!</strong> This tool works perfectly on Safari. Since your HEIC files are already on your iPhone, you can upload them directly and get a PDF <strong className="text-foreground">without any app installs</strong>. Just open this page and you're ready.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card border rounded-2xl mb-4 px-2 overflow-hidden shadow-sm data-[state=open]:border-[#6c5ce7]/30 transition-colors">
              <AccordionTrigger className="hover:no-underline px-4 py-4 text-left font-semibold">Is this tool really free? Any hidden costs?</AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground leading-relaxed">
                <strong className="text-foreground">100% free. Forever.</strong> No watermarks, no limits, no sign-ups, no credit cards. Just a simple tool that works. If you find this useful, share it with a friend — that's the only "cost"!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}

function FileImage({ file }: { file: File }) {
  // We could try to render a thumbnail, but heic2any is async and heavy
  // So we just show a nice icon for HEIC
  return (
    <div className="w-10 h-10 bg-[#6c5ce7]/10 text-[#6c5ce7] rounded-lg flex items-center justify-center shrink-0">
      <FileIcon className="w-5 h-5" />
    </div>
  );
}
