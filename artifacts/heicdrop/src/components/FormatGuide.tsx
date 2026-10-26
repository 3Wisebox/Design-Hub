import { useState } from 'react';
import { ArrowDownRight, FileImage, FileText, Image, LockKeyhole } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Format = 'pdf' | 'jpg' | 'png';

interface FormatGuideProps {
  onChooseFormat: (format: Format) => void;
}

const formatCopy = {
  pdf: {
    icon: FileText,
    eyebrow: 'A document, ready to share',
    title: 'Choose PDF for a set of photos.',
    description:
      'Turn one or more HEIC or HEIF photos into a multi-page PDF for paperwork, printouts, or a single file to send.',
    detailLabel: 'Fine-tune the page',
    detail:
      'Choose A4, Letter, Legal, or Fit to Image; set portrait, landscape, or automatic orientation; then adjust image quality from 50–100%.',
    target: '#pdf-tool',
    cta: 'Make a PDF',
    tone: 'pdf',
  },
  jpg: {
    icon: FileImage,
    eyebrow: 'A familiar image file',
    title: 'Choose JPG for everyday photos.',
    description:
      'JPG is a practical choice when you want a single photo in a widely used image format for sharing or adding to a document.',
    detailLabel: 'Set the image quality',
    detail:
      'Adjust JPG image quality from 50–100% in the image converter. Add multiple HEIC or HEIF files in one session.',
    target: '#image-tool',
    cta: 'Convert to JPG',
    tone: 'image',
  },
  png: {
    icon: Image,
    eyebrow: 'A crisp image file',
    title: 'Choose PNG for image workflows.',
    description:
      'PNG is another standard image output option when you need an image file rather than a document.',
    detailLabel: 'Choose your output',
    detail:
      'Select PNG in the image converter and add HEIC or HEIF photos. The image quality slider is available for JPG; PNG has no quality control.',
    target: '#image-tool',
    cta: 'Convert to PNG',
    tone: 'image',
  },
} as const;

export function FormatGuide({ onChooseFormat }: FormatGuideProps) {
  const [selectedFormat, setSelectedFormat] = useState<Format>('pdf');

  const renderPanel = (format: Format) => {
    const content = formatCopy[format];
    const Icon = content.icon;
    const isPdf = content.tone === 'pdf';

    return (
      <div
        className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(13rem,0.72fr)] sm:items-center"
        data-testid={`format-guide-panel-${format}`}
      >
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                isPdf
                  ? 'bg-primary/10 text-primary'
                  : 'bg-accent/10 text-accent'
              }`}
              aria-hidden="true"
            >
              <Icon className="h-4 w-4" />
            </span>
            {content.eyebrow}
          </div>
          <h3 className="text-xl font-bold leading-tight tracking-tight text-foreground sm:text-2xl">
            {content.title}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            {content.description}
          </p>
          <a
            href={content.target}
            onClick={() => onChooseFormat(format)}
            className={`mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
              isPdf
                ? 'bg-gradient-to-r from-[#6c5ce7] to-[#e17055]'
                : 'bg-gradient-to-r from-teal-600 to-sky-600'
            }`}
            data-testid={`format-guide-cta-${format}`}
          >
            {content.cta}
            <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <aside className="rounded-xl border border-border/80 bg-muted/55 p-4 sm:p-5">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-foreground/70">
            {content.detailLabel}
          </p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {content.detail}
          </p>
        </aside>
      </div>
    );
  };

  return (
    <section
      aria-labelledby="format-guide-title"
      className="mx-auto my-14 max-w-3xl"
      data-testid="format-guide"
    >
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Pick the right format
          </p>
          <h2
            id="format-guide-title"
            className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            One photo. Three useful ways out.
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            Your HEIC and HEIF files are processed locally in your browser.
          </p>
        </div>
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
          <LockKeyhole className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          Files stay on this device
        </div>
      </div>

      <Tabs
        value={selectedFormat}
        onValueChange={(value) => setSelectedFormat(value as Format)}
        className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
        data-testid="format-guide-tabs"
      >
        <TabsList
          aria-label="Choose a format to learn about"
          className="grid h-auto w-full grid-cols-3 gap-1 rounded-none border-b border-border bg-muted/60 p-2"
          data-testid="format-guide-tab-list"
        >
          {(['pdf', 'jpg', 'png'] as const).map((format) => (
            <TabsTrigger
              key={format}
              value={format}
              className="min-h-10 rounded-lg text-sm font-bold uppercase tracking-wide data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm"
              data-testid={`format-guide-tab-${format}`}
            >
              {format}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="p-5 sm:p-7">
          <TabsContent value="pdf" className="mt-0">
            {renderPanel('pdf')}
          </TabsContent>
          <TabsContent value="jpg" className="mt-0">
            {renderPanel('jpg')}
          </TabsContent>
          <TabsContent value="png" className="mt-0">
            {renderPanel('png')}
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
}
