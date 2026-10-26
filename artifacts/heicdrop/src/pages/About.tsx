import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  FileImage,
  FileOutput,
  LockKeyhole,
  Mail,
  SlidersHorizontal,
  Smartphone,
  Workflow,
} from 'lucide-react';

export function About() {
  useDocumentTitle(
    'About HEICraft — HEIC to PDF, JPG & PNG',
    'Learn how HEICraft turns HEIC and HEIF photos into useful PDF, JPG, or PNG files with browser-based processing and practical format controls.',
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="relative flex-1 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] opacity-70"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(circle at 76% 8%, hsl(var(--accent) / 0.14), transparent 32%), radial-gradient(circle at 18% 14%, hsl(var(--primary) / 0.12), transparent 28%)',
          }}
        />

        <div className="container mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-8">
          <div className="mb-14 max-w-4xl">
            <a
              href="/"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ChevronRight className="h-3.5 w-3.5 rotate-180" aria-hidden="true" />
              Back to converter
            </a>

            <div className="mb-5 flex items-center gap-3 text-primary">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <FileOutput className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">
                HEICraft / About
              </span>
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Make your iPhone photos
              <span className="text-primary"> easier to use.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              HEICraft is a focused, browser-based way to turn HEIC and HEIF photos
              into the formats people, documents, and everyday software already
              understand.
            </p>
          </div>

          <div className="mb-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start lg:gap-12">
            <section
              className="rounded-2xl border border-primary/25 bg-card/80 p-6 shadow-sm backdrop-blur sm:p-8"
              aria-labelledby="why-heading"
            >
              <div className="mb-7 flex items-start justify-between gap-6">
                <div>
                  <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    The reason it exists
                  </p>
                  <h2 id="why-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
                    A small format problem with a big amount of friction.
                  </h2>
                </div>
                <Smartphone className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
              </div>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                HEIC is an efficient photo format used by iPhones, but it is not
                supported everywhere. A photo that looks perfectly normal in your
                camera roll can become difficult to attach to a form, place in a
                document, send to a colleague, or open on a less familiar device.
                HEICraft removes that awkward middle step without asking you to learn
                a new workflow.
              </p>
              <ul className="mt-8 grid gap-4 border-t border-border/70 pt-6 sm:grid-cols-3 sm:gap-6">
                {[
                  ['HEIC / HEIF', 'The files you already have'],
                  ['PDF / JPG / PNG', 'Formats made for sharing'],
                  ['In your browser', 'No conversion upload'],
                ].map(([title, description]) => (
                  <li key={title} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm leading-5">
                      <strong className="block font-bold text-foreground">{title}</strong>
                      <span className="text-muted-foreground">{description}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <aside className="rounded-2xl border border-border/80 bg-muted/50 p-5 lg:sticky lg:top-24">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                Our starting point
              </p>
              <p className="mt-4 text-sm leading-6 text-foreground/80">
                A useful converter should feel like a tool, not a request to hand
                over your photo library.
              </p>
              <div className="mt-5 flex items-center gap-2 border-t border-border/70 pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                Local-first by design
              </div>
            </aside>
          </div>

          <section aria-labelledby="workflow-heading" className="mb-14">
            <div className="mb-8 max-w-2xl">
              <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                The workflow
              </p>
              <h2 id="workflow-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
                Three calm steps from photo to file.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                There is no account to create and no queue to monitor. Choose files,
                set the result you need, and download what your browser creates.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <ProcessCard
                number="01"
                icon={<FileImage />}
                title="Choose your files"
                text="Drop in HEIC or HEIF photos, or browse for them on your device. Add more than one when you are preparing a multi-page document."
              />
              <ProcessCard
                number="02"
                icon={<SlidersHorizontal />}
                title="Set the output"
                text="Create a multi-page PDF with A4, Letter, Legal, or image-fit sizing, choose orientation, and adjust image quality. For images, choose JPG or PNG."
              />
              <ProcessCard
                number="03"
                icon={<FileOutput />}
                title="Download the result"
                text="HEICraft builds the converted file in your browser, then gives you the download action. Your result is yours to keep where you choose."
              />
            </div>
          </section>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-12">
            <article className="min-w-0">
              <div className="space-y-12 text-[15px] leading-7 text-muted-foreground">
                <section aria-labelledby="privacy-heading">
                  <SectionHeading
                    number="01"
                    title="Privacy is part of the product"
                    icon={<LockKeyhole />}
                  />
                  <p>
                    HEICraft processes selected files locally in your browser. The
                    conversion code reads the files on your device, creates the PDF,
                    JPG, or PNG there, and does not send the photos to a HEICraft
                    conversion server. We do not keep a copy, provide an online file
                    archive, or require an account for the converter.
                  </p>
                  <p>
                    This boundary is deliberate: your photos should not need to leave
                    your device just because another app prefers a different format.
                    The browser still needs to load the website itself, and your device
                    remains responsible for its own security and temporary memory. For
                    the full detail, read our{' '}
                    <a
                      href="/privacy"
                      className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                    >
                      privacy policy
                    </a>
                    .
                  </p>
                </section>

                <section aria-labelledby="audience-heading">
                  <SectionHeading
                    number="02"
                    title="Made for real handoffs"
                    icon={<Workflow />}
                  />
                  <p>
                    HEICraft is for anyone who has taken a photo on an iPhone and then
                    met a format restriction. It helps students submitting coursework,
                    families sharing a scan, freelancers sending visual references,
                    teams assembling a PDF, and anyone who needs a standard image
                    without installing a desktop utility.
                  </p>
                  <p>
                    It is intentionally useful without being a storage system, editing
                    suite, or social platform. You bring the files, make the conversion
                    you need, and decide what happens next.
                  </p>
                </section>

                <section aria-labelledby="principles-heading">
                  <SectionHeading
                    number="03"
                    title="A few principles guide every screen"
                    icon={<Check />}
                  />
                  <p>
                    Clarity comes first: the destination format, available controls,
                    progress, and download action should be easy to find. Privacy should
                    be understandable rather than hidden in technical language. Control
                    belongs with the person holding the photo, from page size and
                    orientation to quality and final download. And the tool should stay
                    focused: no account ceremony, payment flow, or unnecessary detour
                    between a HEIC file and a usable result.
                  </p>
                </section>
              </div>
            </article>

            <aside className="self-start lg:sticky lg:top-24">
              <div className="rounded-2xl border border-border/80 bg-card/65 p-5">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                  Keep the distinction clear
                </p>
                <p className="mt-4 text-sm leading-6 text-foreground/80">
                  HEICraft can process a file without receiving it. The browser does
                  the work; the download is the handoff back to you.
                </p>
                <a
                  href="/privacy"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                >
                  Read privacy details
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </aside>
          </div>

          <section
            className="mt-16 overflow-hidden rounded-2xl border border-primary/25 bg-primary/10 p-6 sm:p-8"
            aria-labelledby="about-cta-heading"
          >
            <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                  Your next handoff
                </p>
                <h2 id="about-cta-heading" className="text-2xl font-bold tracking-tight">
                  Have a HEIC file waiting?
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Start with the converter, or tell us what would make the workflow
                  clearer for you.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Open converter
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="mailto:3Wisebox@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/35 bg-background/60 px-5 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Contact us
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ProcessCard({
  number,
  icon,
  title,
  text,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-2xl border border-border/80 bg-card/70 p-5 shadow-sm transition-transform hover:-translate-y-0.5 sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary [&>svg]:h-5 [&>svg]:w-5">
          {icon}
        </span>
        <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-muted-foreground">
          {number}
        </span>
      </div>
      <h3 className="mt-6 text-lg font-bold tracking-tight text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
    </article>
  );
}

function SectionHeading({
  number,
  title,
  icon,
}: {
  number: string;
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-start gap-4">
      <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary [&>svg]:h-4 [&>svg]:w-4">
        {icon}
      </span>
      <div>
        <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
          Section {number}
        </p>
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground">{title}</h2>
      </div>
    </div>
  );
}