import { useState, type FormEvent } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleHelp,
  FileCheck2,
  LockKeyhole,
  Mail,
  MessageCircleQuestion,
  ShieldCheck,
} from 'lucide-react';

const CONTACT_EMAIL = '3Wisebox@gmail.com';

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: ContactForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function Contact() {
  useDocumentTitle('Contact — HEICraft');

  const [form, setForm] = useState<ContactForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setFormError('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    };

    if (Object.values(cleanForm).some((value) => !value)) {
      setFormError('Please complete each field before opening your email app.');
      return;
    }

    const body = [
      `Name: ${cleanForm.name}`,
      `Email: ${cleanForm.email}`,
      `Subject: ${cleanForm.subject}`,
      '',
      'Message:',
      cleanForm.message,
    ].join('\n');
    const mailtoUrl =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(cleanForm.subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    window.location.href = mailtoUrl;
  };

  const startAnotherMessage = () => {
    setForm(initialForm);
    setSubmitted(false);
    setFormError('');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="relative flex-1 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] opacity-70"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(circle at 76% 8%, hsl(var(--accent) / 0.12), transparent 32%), radial-gradient(circle at 18% 14%, hsl(var(--primary) / 0.1), transparent 28%)',
          }}
        />

        <div className="container mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-8">
          <div className="mb-12 max-w-4xl">
            <a
              href="/"
              className="mb-8 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ChevronRight className="h-3.5 w-3.5 rotate-180" aria-hidden="true" />
              Back to converter
            </a>

            <div className="mb-5 flex items-center gap-3 text-primary">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <MessageCircleQuestion className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">
                HEICraft / Contact
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end lg:gap-12">
              <div>
                <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  A clear path to the right
                  <span className="text-primary"> answer.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  Ask about converting HEIC files, the browser-based workflow, privacy,
                  feedback, or anything that needs a closer look. Your message opens in
                  your own email app, ready for you to review and send.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/25 bg-card/75 p-5 shadow-sm backdrop-blur">
                <div className="flex items-center gap-3 text-primary">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em]">
                    Direct line
                  </p>
                </div>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-4 block break-all text-base font-bold text-foreground underline decoration-primary/30 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                >
                  {CONTACT_EMAIL}
                </a>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Prefer to write from scratch? Use this address as a direct fallback.
                </p>
              </div>
            </div>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.72fr)] lg:gap-12">
            <section
              className="rounded-2xl border border-primary/25 bg-card/85 p-6 shadow-sm backdrop-blur sm:p-8"
              aria-labelledby="contact-form-heading"
            >
              <div className="mb-8 flex items-start justify-between gap-6">
                <div>
                  <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    Send a query
                  </p>
                  <h2 id="contact-form-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Put the details in one place.
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                    All fields are included in the email draft so the question arrives
                    with the context you chose to share.
                  </p>
                </div>
                <FileCheck2 className="mt-1 hidden h-6 w-6 shrink-0 text-primary sm:block" aria-hidden="true" />
              </div>

              {submitted ? (
                <div
                  className="rounded-xl border border-accent/30 bg-accent/10 p-6"
                  role="status"
                  aria-live="polite"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight">
                    Your email draft is ready.
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Your email client should have opened with the address, subject, and
                    message filled in. Review the details, then choose Send there.
                    HEICraft does not send the message for you.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      Open direct email
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={startAnotherMessage}
                      className="inline-flex items-center justify-center rounded-lg border border-border bg-background/60 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      Write another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate={false}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Your name" htmlFor="contact-name" required>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={(event) => updateField('name', event.target.value)}
                        placeholder="How should we address you?"
                        required
                        className={inputClassName}
                      />
                    </Field>
                    <Field label="Your email" htmlFor="contact-email" required>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(event) => updateField('email', event.target.value)}
                        placeholder="you@example.com"
                        required
                        className={inputClassName}
                      />
                    </Field>
                  </div>

                  <div className="mt-5">
                    <Field label="Subject" htmlFor="contact-subject" required>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={(event) => updateField('subject', event.target.value)}
                        placeholder="For example: Trouble opening a HEIC file"
                        required
                        className={inputClassName}
                      />
                    </Field>
                  </div>

                  <div className="mt-5">
                    <Field
                      label="Message"
                      htmlFor="contact-message"
                      required
                      hint="Please avoid attaching a photo unless it is necessary to your question."
                    >
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={7}
                        value={form.message}
                        onChange={(event) => updateField('message', event.target.value)}
                        placeholder="Tell us what happened, what you expected, or what you would like to share."
                        required
                        className={`${inputClassName} min-h-40 resize-y`}
                      />
                    </Field>
                  </div>

                  {formError ? (
                    <p className="mt-4 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive" role="alert">
                      {formError}
                    </p>
                  ) : null}

                  <div className="mt-7 flex flex-col gap-4 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-sm text-xs leading-5 text-muted-foreground">
                      Required fields are marked with <span aria-hidden="true">*</span>.
                      Nothing is submitted to a HEICraft form server.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      Open email draft
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </section>

            <aside className="space-y-5 lg:sticky lg:top-24">
              <div className="rounded-2xl border border-border/80 bg-muted/50 p-5 sm:p-6">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                  Good to know
                </p>
                <h2 className="mt-3 text-xl font-bold tracking-tight">
                  A question can be specific.
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  A short description of the file type, browser, device, or step where
                  something felt unclear can make your note easier to understand.
                </p>
                <ul className="mt-5 space-y-3 border-t border-border/70 pt-5 text-sm leading-5 text-foreground/80">
                  <li className="flex gap-3">
                    <CircleHelp className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>Conversion questions or an unexpected result</span>
                  </li>
                  <li className="flex gap-3">
                    <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>Privacy questions about local browser processing</span>
                  </li>
                  <li className="flex gap-3">
                    <MessageCircleQuestion className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>Feedback that could make HEICraft clearer</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border/80 bg-card/65 p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-accent" aria-hidden="true" />
                  <h2 className="text-base font-bold">Your files stay out of this form.</h2>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  HEICraft converts selected files in your browser. This contact page
                  only opens an email draft with the text you enter; it does not attach
                  or upload your files.
                </p>
                <a
                  href="/privacy"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                >
                  Read the privacy page
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </aside>
          </div>

          <section
            className="mt-14 overflow-hidden rounded-2xl border border-primary/25 bg-primary/10 p-6 sm:p-8"
            aria-labelledby="contact-next-step-heading"
          >
            <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12">
              <div className="max-w-2xl">
                <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                  Prefer a blank draft?
                </p>
                <h2 id="contact-next-step-heading" className="text-2xl font-bold tracking-tight">
                  Email {CONTACT_EMAIL} directly.
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  This is the same inbox used by the contact form. A direct mailto link
                  is available whenever you would rather use your own subject and format.
                </p>
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/35 bg-background/60 px-5 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {CONTACT_EMAIL}
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

const inputClassName =
  'mt-2 block w-full rounded-lg border border-input bg-background/70 px-3.5 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/75 focus:border-primary focus:ring-2 focus:ring-primary/20';

function Field({
  label,
  htmlFor,
  required = false,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-bold text-foreground">
        {label}
        {required ? (
          <span className="ml-1 text-primary" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>
      {hint ? <p className="mt-1 text-xs leading-5 text-muted-foreground">{hint}</p> : null}
      {children}
    </div>
  );
}