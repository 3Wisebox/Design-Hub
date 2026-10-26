import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import {
  ArrowUpRight,
  AlertTriangle,
  ChevronRight,
  FileCheck2,
  FileText,
  Gavel,
  Mail,
  Scale,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import type { ReactNode } from 'react';

const sections = [
  ['acceptance', 'Acceptance & scope'],
  ['eligibility', 'Eligibility & your responsibilities'],
  ['use', 'Acceptable use'],
  ['files', 'Your files & conversion'],
  ['intellectual-property', 'Intellectual property'],
  ['fees', 'Fees'],
  ['availability', 'Availability & changes'],
  ['third-parties', 'Third-party components'],
  ['warranty', 'Disclaimers'],
  ['liability', 'Limitation of liability'],
  ['termination', 'Suspension & termination'],
  ['changes', 'Changes to these terms'],
  ['law', 'Governing law & disputes'],
  ['contact', 'Contact'],
] as const;

export function Terms() {
  useDocumentTitle(
    'Terms of Service — HEICraft',
    'Read the terms for using HEICraft, a browser-based HEIC and HEIF converter for PDF, JPG, and PNG.',
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="relative flex-1 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] opacity-70"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(circle at 76% 8%, hsl(var(--accent) / 0.12), transparent 32%), radial-gradient(circle at 18% 14%, hsl(var(--primary) / 0.1), transparent 28%)',
          }}
        />

        <div className="container mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-8">
          <div className="mb-10 max-w-4xl">
            <a
              href="/"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
              data-testid="link-terms-home"
            >
              <ChevronRight className="h-3.5 w-3.5 rotate-180" aria-hidden="true" />
              Back to converter
            </a>

            <div className="mb-5 flex items-center gap-3 text-primary">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <Scale className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">
                HEICraft / Terms
              </span>
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              A few clear terms
              <span className="text-primary"> for using HEICraft.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
              These terms explain what the browser-based converter does, what it
              does not promise, and what we each need to take care of.
            </p>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Effective October 26, 2026
            </p>
          </div>

          <div
            className="mb-10 flex items-start gap-4 rounded-2xl border border-amber-300/80 bg-amber-50/90 p-5 text-amber-950 shadow-sm dark:border-amber-700/60 dark:bg-amber-950/35 dark:text-amber-100 sm:p-6"
            role="note"
            aria-label="Legal information disclaimer"
          >
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-400/60 bg-amber-100 text-amber-800 dark:border-amber-600/50 dark:bg-amber-900/50 dark:text-amber-200">
              <AlertTriangle className="h-4.5 w-4.5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-semibold">General information only — not legal advice</p>
              <p className="mt-1 text-sm leading-6 text-amber-900/80 dark:text-amber-100/80">
                This is a general terms template, not legal advice. It should be
                reviewed by qualified counsel for the service and applicable laws.
              </p>
            </div>
          </div>

          <div className="mb-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start lg:gap-12">
            <section
              className="rounded-2xl border border-primary/25 bg-card/80 p-6 shadow-sm backdrop-blur sm:p-8"
              aria-labelledby="summary-heading"
            >
              <div className="mb-6 flex items-start justify-between gap-6">
                <div>
                  <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    The short version
                  </p>
                  <h2 id="summary-heading" className="text-2xl font-bold tracking-tight">
                    Your files stay in your browser.
                  </h2>
                </div>
                <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
              </div>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                HEICraft converts HEIC/HEIF files on your device into PDF, JPG, or
                PNG. You keep your rights to your files; you are responsible for
                having permission to convert them and for checking the results.
              </p>
              <ul className="mt-7 grid gap-4 border-t border-border/70 pt-6 sm:grid-cols-3 sm:gap-6">
                <li className="flex gap-3">
                  <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm font-medium leading-5">No account or payment flow today</span>
                </li>
                <li className="flex gap-3">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm font-medium leading-5">No file upload for normal conversion</span>
                </li>
                <li className="flex gap-3">
                  <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-sm font-medium leading-5">No compatibility or uptime guarantee</span>
                </li>
              </ul>
            </section>

            <nav
              className="rounded-2xl border border-border/80 bg-card/50 p-5 lg:sticky lg:top-24"
              aria-label="Terms of service sections"
            >
              <p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                On this page
              </p>
              <ol className="space-y-1">
                {sections.map(([id, label], index) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="group flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      data-testid={`link-terms-section-${id}`}
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
                <section id="acceptance" className="scroll-mt-24">
                  <SectionHeading number="01" title="Acceptance & scope" icon={<FileCheck2 />} />
                  <p>
                    These Terms of Service apply when you access or use HEICraft.
                    By using the service, you agree to these terms. If you do not
                    agree, do not use HEICraft.
                  </p>
                  <p>
                    In these terms, “HEICraft,” “we,” “us,” and “our” refer to the
                    HEICraft service and the person or organization operating it.
                  </p>
                  <p>
                    The HEICraft operator provides a browser-based tool to convert
                    HEIC and HEIF image files into PDF, JPG, or PNG files. The
                    service is currently available without a user-facing account
                    or payment flow.
                  </p>
                </section>

                <section id="eligibility" className="scroll-mt-24">
                  <SectionHeading number="02" title="Eligibility & your responsibilities" icon={<ShieldCheck />} />
                  <p>
                    You may use HEICraft only if you can lawfully agree to these
                    terms and use the service under the laws that apply to you. If
                    you use it on behalf of another person or organization, you
                    must have authority to do so.
                  </p>
                  <p>
                    You are responsible for your device, browser, internet
                    connection, selected files, conversion settings, downloads,
                    and how you use the resulting files. Keep your original files
                    and review each output before relying on it.
                  </p>
                </section>

                <section id="use" className="scroll-mt-24">
                  <SectionHeading number="03" title="Acceptable use" icon={<Wrench />} />
                  <p>You agree not to use HEICraft to:</p>
                  <ul className="ml-5 list-disc space-y-2 marker:text-primary">
                    <li>violate any law or another person’s rights, including intellectual-property or privacy rights;</li>
                    <li>process files you do not have the right or authority to use;</li>
                    <li>disrupt, damage, overload, or interfere with the service, its hosting, or other users’ access;</li>
                    <li>attempt unauthorized access, introduce malicious code, or misuse the service to harm others; or</li>
                    <li>reverse engineer or circumvent technical protections, except where applicable law does not permit that restriction.</li>
                  </ul>
                </section>

                <section id="files" className="scroll-mt-24">
                  <SectionHeading number="04" title="Your files & conversion" icon={<FileText />} />
                  <p>
                    For normal conversion, your browser reads and processes
                    selected files on your device; HEICraft does not upload those
                    files to a HEICraft conversion server. You retain all rights
                    you have in your input files and converted outputs. HEICraft
                    does not acquire a license to file content because those files
                    remain on your device during conversion.
                  </p>
                  <p>
                    You confirm that you own the files or have the rights and
                    authority needed to select, convert, and use them. You are
                    responsible for ensuring your conversion and any later use of
                    an output comply with applicable law and third-party rights.
                  </p>
                  <InfoBlock title="What the converter currently does">
                    <ul className="space-y-2">
                      <li>Creates a PDF from one or more selected images, with page size, orientation, and quality options.</li>
                      <li>Converts images to JPG with a quality control, or PNG without that quality slider.</li>
                      <li>Lets you download multiple image conversion outputs together as a ZIP archive.</li>
                    </ul>
                  </InfoBlock>
                  <p>
                    Conversion depends on your browser, device resources, file
                    characteristics, and the software available to your browser.
                    A file may fail, take a long time, or produce an output that
                    differs from your expectations. We do not guarantee
                    compatibility with every browser or device. HEICraft is not
                    an archival or backup service. Keep your originals and verify
                    downloaded results; do not rely on HEICraft as the only copy.
                  </p>
                </section>

                <section id="intellectual-property" className="scroll-mt-24">
                  <SectionHeading number="05" title="Intellectual property" icon={<ShieldCheck />} />
                  <p>
                    The HEICraft name, branding, website, design, text, and
                    software are owned by or licensed to the HEICraft operator
                    and are protected by applicable intellectual-property laws.
                    These terms give you a limited,
                    personal, non-exclusive, non-transferable right to use the
                    service for its intended purpose, subject to these terms.
                  </p>
                  <p>
                    No other rights are granted to you. Third-party components
                    remain subject to their own licenses and terms.
                  </p>
                </section>

                <section id="fees" className="scroll-mt-24">
                  <SectionHeading number="06" title="Fees" icon={<Scale />} />
                  <p>
                    HEICraft currently has no user-facing payment flow and does
                    not charge a fee to use the conversion features described
                    here. We may introduce paid features or fees in the future.
                    If we do, we will show the applicable price and terms before
                    you are asked to pay; those charges will not apply
                    retroactively to use already completed.
                  </p>
                </section>

                <section id="availability" className="scroll-mt-24">
                  <SectionHeading number="07" title="Availability & changes to the service" icon={<Wrench />} />
                  <p>
                    We aim to make HEICraft useful, but do not promise continuous,
                    uninterrupted, or error-free availability, a service-level
                    agreement, or compatibility with a particular browser,
                    device, operating system, or file. The service may be
                    unavailable, limited, or changed from time to time.
                  </p>
                  <p>
                    We may add, modify, or discontinue features, including
                    conversion options, when reasonably needed to operate or
                    improve the service. No archival, recovery, or backup service
                    is provided.
                  </p>
                </section>

                <section id="third-parties" className="scroll-mt-24">
                  <SectionHeading number="08" title="Third-party components & hosting" icon={<Wrench />} />
                  <p>
                    HEICraft relies on browser technologies, third-party software
                    components, and hosting infrastructure to deliver the website
                    and run local conversions. Those components and infrastructure
                    may be subject to their own terms, licenses, and availability.
                    Their involvement does not change the local-processing
                    description above: normal conversion does not send your
                    selected file contents to a HEICraft conversion server.
                  </p>
                  <p>
                    For details about website delivery, local storage, and
                    third-party requests, read the{' '}
                    <a
                      href="/privacy"
                      className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                      data-testid="link-terms-privacy-details"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                  <p>
                    We do not control independent third-party services and are
                    not responsible for their separate products or policies.
                    Nothing in this section limits any rights you may have under
                    mandatory law.
                  </p>
                </section>

                <section id="warranty" className="scroll-mt-24">
                  <SectionHeading number="09" title="Disclaimers" icon={<AlertTriangle />} />
                  <p>
                    To the extent permitted by applicable law, HEICraft is
                    provided “as is” and “as available,” without express or
                    implied warranties, including warranties of accuracy,
                    reliability, fitness for a particular purpose, or
                    non-infringement. We do not warrant that a conversion will
                    succeed, preserve every detail, meet a particular quality
                    standard, or be suitable for a particular use.
                  </p>
                  <p>
                    This disclaimer does not exclude or limit a warranty,
                    guarantee, remedy, or other right that applicable law does
                    not allow us to exclude or limit. In particular, nothing
                    here takes away mandatory consumer protections.
                  </p>
                </section>

                <section id="liability" className="scroll-mt-24">
                  <SectionHeading number="10" title="Limitation of liability" icon={<Scale />} />
                  <p>
                    To the extent permitted by applicable law, HEICraft / its
                    operator will not be liable for indirect, incidental,
                    special, consequential, exemplary, or punitive damages, or
                    for loss of profits, business, data, goodwill, or
                    opportunity, arising from or related to your use of or
                    inability to use HEICraft.
                  </p>
                  <p>
                    To the extent permitted by applicable law, the aggregate
                    liability of the HEICraft operator for claims arising out
                    of or relating to the service or these terms will not exceed
                    the amounts you actually paid to HEICraft for the service
                    during the 12 months immediately before the event giving
                    rise to the claim. HEICraft currently has no payment flow,
                    so this cap may be zero.
                  </p>
                  <p>
                    These limits apply only to the extent the law permits. They
                    do not exclude liability that cannot lawfully be excluded or
                    limited, and do not reduce non-waivable consumer rights or
                    remedies.
                  </p>
                </section>

                <section id="termination" className="scroll-mt-24">
                  <SectionHeading number="11" title="Suspension & termination" icon={<ShieldCheck />} />
                  <p>
                    You may stop using HEICraft at any time. We may suspend or
                    restrict access, or discontinue the service, where reasonably
                    necessary to protect the service or others, address misuse
                    or a legal requirement, or make a service change. Where
                    appropriate and practicable, we will limit a restriction to
                    what is needed.
                  </p>
                  <p>
                    Because there is no user-facing account or file archive,
                    ending access does not involve an account cancellation or
                    deletion process. These terms continue to apply to matters
                    arising from your prior use, and provisions that by their
                    nature should continue will survive.
                  </p>
                </section>

                <section id="changes" className="scroll-mt-24">
                  <SectionHeading number="12" title="Changes to these terms" icon={<FileCheck2 />} />
                  <p>
                    We may update these terms to reflect changes to HEICraft,
                    the law, or how the service operates. The current version
                    will be posted on this page with its effective date. Your
                    continued use after revised terms take effect indicates
                    acceptance of the updated terms. If you do not agree, stop
                    using the service.
                  </p>
                </section>

                <section id="law" className="scroll-mt-24">
                  <SectionHeading number="13" title="Governing law & disputes" icon={<Gavel />} />
                  <p>
                    These terms and disputes relating to them or HEICraft are
                    governed by the laws of India, subject to mandatory consumer
                    protections and other rights that apply to you and cannot
                    lawfully be waived. Courts of competent jurisdiction in
                    India may hear disputes, subject to any mandatory venue or
                    consumer-protection rules that apply.
                  </p>
                </section>

                <section id="contact" className="scroll-mt-24">
                  <SectionHeading number="14" title="Contact" icon={<Mail />} />
                  <p>
                    For questions about these terms, contact the HEICraft
                    operator at{' '}
                    <a
                      href="mailto:3Wisebox@gmail.com"
                      className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                      data-testid="link-terms-email"
                    >
                      3Wisebox@gmail.com
                    </a>
                    . You can also visit our{' '}
                    <a
                      href="/contact"
                      className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                    >
                      contact page
                    </a>
                    .
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-border/70 pt-5 text-sm">
                    <a
                      href="/"
                      className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                      data-testid="link-terms-footer-home"
                    >
                      HEICraft home
                    </a>
                    <a
                      href="/privacy"
                      className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                      data-testid="link-terms-footer-privacy"
                    >
                      Privacy policy
                    </a>
                    <a
                      href="/contact"
                      className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                      data-testid="link-terms-footer-contact"
                    >
                      Contact
                    </a>
                  </div>
                </section>
              </div>
            </article>

            <aside className="self-start lg:sticky lg:top-24">
              <div className="rounded-2xl border border-border/80 bg-muted/50 p-5">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                  Before you convert
                </p>
                <p className="mt-4 text-sm leading-6 text-foreground/80">
                  Keep the original, make sure you are allowed to convert it,
                  and open the result to check it. HEICraft is a converter, not
                  a backup or archive.
                </p>
                <a
                  href="/privacy"
                  className="mt-5 inline-flex items-center gap-1.5 border-t border-border/70 pt-4 text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                  data-testid="link-terms-aside-privacy"
                >
                  How files are handled
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </aside>
          </div>

          <section
            className="mt-16 overflow-hidden rounded-2xl border border-primary/25 bg-primary/10 p-6 sm:p-8"
            aria-labelledby="terms-contact-heading"
          >
            <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                  Still have a question?
                </p>
                <h2 id="terms-contact-heading" className="text-2xl font-bold tracking-tight">
                  Write to the HEICraft operator.
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Contact us about these terms, the converter, or how files are
                  processed in your browser.
                </p>
              </div>
              <a
                href="mailto:3Wisebox@gmail.com"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                data-testid="link-terms-contact-cta"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                3Wisebox@gmail.com
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
    <div className="my-6 rounded-xl border border-border/80 bg-muted/45 p-5">
      <h3 className="mb-3 text-sm font-bold text-foreground">{title}</h3>
      <div className="text-sm leading-6 text-muted-foreground">{children}</div>
    </div>
  );
}
