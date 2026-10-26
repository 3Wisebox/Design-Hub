import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Database,
  FileCheck2,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import type { ReactNode } from 'react';

export function Privacy() {
  useDocumentTitle(
    'Privacy Policy — HEICraft',
    'Read how HEICraft handles files, browser storage, and email messages. HEIC and HEIF conversion runs locally in your browser.',
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="relative flex-1 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30rem] opacity-70"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(circle at 76% 8%, hsl(var(--accent) / 0.12), transparent 32%), radial-gradient(circle at 18% 14%, hsl(var(--primary) / 0.1), transparent 28%)',
          }}
        />

        <div className="container mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <a
              href="/"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ChevronRight className="h-3.5 w-3.5 rotate-180" aria-hidden="true" />
              Back to converter
            </a>

            <div className="mb-5 flex items-center gap-3 text-primary">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">
                HEICraft / Privacy
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Your photos stay
              <span className="text-primary"> yours.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              This policy explains what happens when you use HEICraft to turn iPhone
              photos into PDF, JPG, or PNG files. The short answer: conversion happens
              in your browser, not on our servers.
            </p>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Effective September 3, 2026
            </p>
          </div>

          <div className="mb-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start lg:gap-12">
            <section
              className="rounded-2xl border border-primary/25 bg-card/80 p-6 shadow-sm backdrop-blur sm:p-8"
              aria-labelledby="summary-heading"
            >
              <div className="mb-7 flex items-start justify-between gap-6">
                <div>
                  <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    Plain-language summary
                  </p>
                  <h2 id="summary-heading" className="text-2xl font-bold tracking-tight">
                    Built around a simple boundary.
                  </h2>
                </div>
                <LockKeyhole className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
              </div>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                Your selected files are read by your browser and processed on your
                device. HEICraft does not upload them to a conversion server, keep a
                copy, or require an account. When you download a result, it goes from
                your browser to the location you choose.
              </p>
              <ul className="mt-8 grid gap-4 border-t border-border/70 pt-6 sm:grid-cols-3 sm:gap-6">
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm font-medium leading-5">Local browser conversion</span>
                </li>
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm font-medium leading-5">No account or payment flow</span>
                </li>
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm font-medium leading-5">No HEICraft file archive</span>
                </li>
              </ul>
            </section>

            <nav
              className="rounded-2xl border border-border/80 bg-card/50 p-5 lg:sticky lg:top-24"
              aria-label="Privacy policy sections"
            >
              <p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                On this page
              </p>
              <ol className="space-y-1">
                {[
                  ['files', 'Files & retention'],
                  ['information', 'Information we collect'],
                  ['local-storage', 'Local storage & cookies'],
                  ['libraries', 'Libraries & hosting'],
                  ['security', 'Security limitations'],
                  ['children', 'Children'],
                  ['rights', 'Your rights & contact'],
                  ['changes', 'Policy changes'],
                ].map(([id, label], index) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="group flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <span className="font-mono text-[11px] text-primary/70">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{label}</span>
                      <ArrowUpRight
                        className="ml-auto h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-12">
            <article className="min-w-0">
              <div className="space-y-12 text-[15px] leading-7 text-muted-foreground">
                <section id="files" className="scroll-mt-24">
                  <SectionHeading number="01" title="Files, processing & retention" icon={<FileCheck2 />} />
                  <p>
                    HEICraft is a browser-based converter. When you choose HEIC or HEIF
                    files, your browser loads those files into local memory and the
                    conversion code processes them on your device. The selected files
                    are not sent to a HEICraft conversion server or stored by HEICraft.
                  </p>
                  <p>
                    Converted PDF, JPG, and PNG files are created in your browser. They
                    remain available to you through the browser until you download or
                    otherwise handle them. HEICraft does not keep an online copy,
                    provide an account library, or act as a backup service. Your browser
                    and device may manage temporary memory according to their own
                    settings.
                  </p>
                </section>

                <section id="information" className="scroll-mt-24">
                  <SectionHeading
                    number="02"
                    title="Information we do and do not collect"
                    icon={<Database />}
                  />
                  <p>
                    You can use the converter without creating an account, entering an
                    email address, or providing personal information. HEICraft currently
                    has no user-facing account system and no user-facing payment flow.
                  </p>
                  <div className="my-6 grid gap-4 sm:grid-cols-2">
                    <InfoBlock title="Not collected by the app">
                      <ul className="space-y-2">
                        <li>Selected photo or document contents</li>
                        <li>Converted files or file thumbnails</li>
                        <li>Account, profile, or payment details</li>
                        <li>Names or email addresses as a condition of use</li>
                      </ul>
                    </InfoBlock>
                    <InfoBlock title="If you contact us">
                      <p>
                        If you voluntarily email 3Wisebox@gmail.com, we receive the
                        address and message you send so we can read and reply. Please
                        do not attach a photo unless it is necessary to your question.
                      </p>
                    </InfoBlock>
                  </div>
                  <p>
                    Opening any website necessarily involves your browser requesting the
                    app’s HTML, scripts, styles, and other assets from its hosting
                    infrastructure. This policy does not make a claim about routine
                    technical logs kept by that infrastructure; HEICraft’s conversion
                    behavior does not add your selected file contents to those requests.
                  </p>
                </section>

                <section id="local-storage" className="scroll-mt-24">
                  <SectionHeading number="03" title="Local storage & cookies" icon={<Smartphone />} />
                  <p>
                    HEICraft may store your light or dark theme preference locally in
                    your browser so the interface can remember that choice. This
                    preference is not an account record and is not used to identify you.
                  </p>
                  <p>
                    The converter does not need a cookie to process a file. We do not
                    describe or promise any advertising, tracking, or analytics cookies
                    here because there is no user-facing analytics or advertising flow
                    in the app.
                  </p>
                  <p>
                    You can remove locally stored preferences through your browser’s
                    site-data or storage controls. Clearing them may reset the theme
                    preference, but it does not create a copy of your converted files
                    on HEICraft’s servers.
                  </p>
                </section>

                <section id="libraries" className="scroll-mt-24">
                  <SectionHeading
                    number="04"
                    title="Third-party libraries & hosting"
                    icon={<ShieldCheck />}
                  />
                  <p>
                    HEICraft uses open-source JavaScript libraries, including
                    <code className="mx-1 rounded bg-muted px-1.5 py-0.5 font-mono text-[0.82em] text-foreground">
                      heic2any
                    </code>
                    and
                    <code className="mx-1 rounded bg-muted px-1.5 py-0.5 font-mono text-[0.82em] text-foreground">
                      pdf-lib
                    </code>
                    , to perform image decoding and document creation in your browser.
                    They are part of the app’s client-side code; HEICraft does not
                    configure them to upload your selected files.
                  </p>
                  <p>
                    The website itself is delivered by web hosting infrastructure so
                    your browser can load the app. That delivery is separate from
                    conversion: the files you select are not sent back as part of the
                    conversion process. HEICraft does not currently present a separate
                    user-facing integration, social sign-in, or payment provider flow.
                  </p>
                  <p>
                    The interface requests the Space Grotesk typeface from Google Fonts.
                    That request is separate from file conversion and may involve
                    technical information, such as your IP address, being sent to
                    Google to deliver the font. See{' '}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                    >
                      Google’s privacy policy
                    </a>{' '}
                    for information about Google’s handling of that request.
                  </p>
                </section>

                <section id="security" className="scroll-mt-24">
                  <SectionHeading number="05" title="Security limitations" icon={<LockKeyhole />} />
                  <p>
                    Local processing reduces the need to transfer your photos, but no
                    website can guarantee the security of the device, browser, network,
                    or files you use. Keep your browser and operating system current,
                    use a device you trust, and avoid processing sensitive files on a
                    shared or compromised computer.
                  </p>
                  <p>
                    HEICraft is a converter, not long-term storage. Download results to a
                    location you trust and use your device’s normal controls if you want
                    to remove temporary browser data.
                  </p>
                </section>

                <section id="children" className="scroll-mt-24">
                  <SectionHeading number="06" title="Children" icon={<Smartphone />} />
                  <p>
                    HEICraft does not require an account and is not designed to collect
                    information from children. Because the service does not ask users to
                    submit personal information to convert a file, there is no child
                    account or profile to manage.
                  </p>
                </section>

                <section id="rights" className="scroll-mt-24">
                  <SectionHeading number="07" title="Your rights & how to contact us" icon={<Mail />} />
                  <p>
                    You control the files you choose, the conversions you start, and the
                    downloads you keep. Since HEICraft does not maintain accounts or
                    store conversion files, there is generally no HEICraft-held photo
                    archive to access, correct, or delete.
                  </p>
                  <p>
                    If you have a privacy question, want to ask what information is
                    associated with a message you sent, or need to raise a concern,
                    contact us at{' '}
                    <a
                      href="mailto:3Wisebox@gmail.com"
                      className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                    >
                      3Wisebox@gmail.com
                    </a>
                    . We will use the details you provide to understand and respond to
                    your request.
                  </p>
                </section>

                <section id="changes" className="scroll-mt-24">
                  <SectionHeading number="08" title="Changes to this policy" icon={<ShieldCheck />} />
                  <p>
                    We may update this page when HEICraft’s behavior, features, or
                    privacy practices change. The effective date at the top will indicate
                    which version is current. Please check this page when you use a new
                    feature or have a question about how the app works.
                  </p>
                </section>
              </div>
            </article>

            <aside className="self-start lg:sticky lg:top-24">
              <div className="rounded-2xl border border-border/80 bg-muted/50 p-5">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                  A useful distinction
                </p>
                <p className="mt-4 text-sm leading-6 text-foreground/80">
                  HEICraft can process a file without receiving it. The browser does
                  the work; your download is the handoff back to you.
                </p>
                <div className="mt-5 flex items-center gap-2 border-t border-border/70 pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  Local-first by design
                </div>
              </div>
            </aside>
          </div>

          <section
            className="mt-16 overflow-hidden rounded-2xl border border-primary/25 bg-primary/10 p-6 sm:p-8"
            aria-labelledby="privacy-contact-heading"
          >
            <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                  Questions are welcome
                </p>
                <h2 id="privacy-contact-heading" className="text-2xl font-bold tracking-tight">
                  Want to talk through something specific?
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Send a note and we’ll help clarify how the current browser-based
                  workflow handles your files.
                </p>
              </div>
              <a
                href="mailto:3Wisebox@gmail.com"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email 3Wisebox@gmail.com
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function SectionHeading({
  number,
  title,
  icon,
}: {
  number: string;
  title: string;
  icon: ReactNode;
}) {
  return (
    <div className="mb-5 flex items-start gap-4">
      <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
        <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>
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

function InfoBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border/80 bg-muted/45 p-5">
      <h3 className="mb-3 text-sm font-bold text-foreground">{title}</h3>
      <div className="text-sm leading-6 text-muted-foreground">{children}</div>
    </div>
  );
}