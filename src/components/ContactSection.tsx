import React, { useState } from 'react';
import {
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
  MapPin,
  Linkedin,
  Github,
  FileText,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface Props {
  onOpenCvModal?: () => void;
}

export const ContactSection: React.FC<Props> = ({ onOpenCvModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDirectEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/godiwala.bhumi@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          _subject: `New Portfolio Message from ${name.trim()} (${email.trim()})`,
          _replyto: email.trim(),
          _cc: 'bgodiwal@asu.edu',
          _template: 'table',
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Failed to deliver message directly');
      }
    } catch (err) {
      console.error('Direct email delivery error:', err);
      setStatus('error');
      setErrorMessage('Direct delivery encountered an issue. You can send via your email client or copy the message below.');
    }
  };

  const handleOpenEmailAppFallback = () => {
    const subject = encodeURIComponent(
      name ? `Inquiry from ${name} regarding AI/ML roles or research` : 'Inquiry regarding AI/ML roles or research'
    );
    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name} (${email})`
    );
    window.location.href = `mailto:godiwala.bhumi@gmail.com?cc=bgodiwal@asu.edu&subject=${subject}&body=${body}`;
  };

  const handleCopyMessage = () => {
    const fullText = `Subject: Inquiry regarding AI/ML roles or research\n\n${message}\n\nFrom: ${name} (${email})`;
    navigator.clipboard.writeText(fullText);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="border-t border-slate-200/80 dark:border-white/[0.08] transition-colors">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (6 cols): Direct Details & Note */}
          <div className="lg:col-span-6">
            <p className="font-mono text-xs uppercase text-slate-500 dark:text-slate-400">06 — Contact</p>
            <h2 className="mt-2 font-display text-3xl font-medium text-slate-900 dark:text-slate-100 sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-2 font-display text-xl text-[var(--brass)] font-normal">
              Open to research internships, collaborations and ML roles.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-300 max-w-[48ch]">
              If you are hiring for multimodal, agentic or efficient-inference work, or you want to discuss research collaborations, feel free to send a note.
            </p>

            {/* Direct Info List (No raw email/phone) */}
            <div className="mt-8 space-y-4 font-mono text-xs">
              {/* Based in */}
              <div className="flex items-center gap-2">
                <span className="text-slate-500 dark:text-slate-400 w-20">Location</span>
                <span className="text-slate-800 dark:text-slate-200">Tempe, Arizona · Open to relocation</span>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-2">
                <span className="text-slate-500 dark:text-slate-400 w-20">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/bhumigodiwala"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-800 dark:text-slate-200 hover:text-[var(--brass)] transition flex items-center gap-1"
                >
                  linkedin.com/in/bhumigodiwala
                  <ExternalLink className="h-3 w-3 text-slate-400" />
                </a>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-2">
                <span className="text-slate-500 dark:text-slate-400 w-20">GitHub</span>
                <a
                  href="https://github.com/bhumigodiwala"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-800 dark:text-slate-200 hover:text-[var(--brass)] transition flex items-center gap-1"
                >
                  github.com/bhumigodiwala
                  <ExternalLink className="h-3 w-3 text-slate-400" />
                </a>
              </div>

              {/* CV */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-slate-500 dark:text-slate-400 w-20">Curriculum</span>
                <button
                  type="button"
                  onClick={onOpenCvModal}
                  className="text-[var(--brass)] hover:underline flex items-center gap-1 font-semibold"
                >
                  View / Download CV
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): Form with direct email delivery */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.025] p-6 sm:p-7 backdrop-blur-xl shadow-lg dark:shadow-xl transition-colors">
              {status === 'success' ? (
                <div className="py-6 text-center space-y-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--teal)]/15 text-[var(--teal)] ring-4 ring-[var(--teal)]/10">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-slate-900 dark:text-slate-100">
                      Message sent directly!
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                      Thank you for reaching out. Your note has been delivered directly to Bhumi&apos;s email (<span className="font-mono text-xs text-[var(--brass)]">godiwala.bhumi@gmail.com</span>). She will reply to you at <span className="font-mono text-xs text-slate-900 dark:text-slate-100">{email}</span> soon.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-white/[0.04] px-4 py-2 text-xs font-mono text-slate-700 dark:text-slate-300 hover:border-[var(--brass)] hover:text-slate-900 dark:hover:text-white transition shadow-xs"
                  >
                    <span>Send another message</span>
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleDirectEmailSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label className="block font-mono text-xs text-slate-700 dark:text-slate-300">
                      Your name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins (Recruiter / Research Lead)"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 dark:border-white/[0.1] bg-slate-50 dark:bg-[#0c121e] px-3.5 py-2.5 font-body text-sm text-slate-900 dark:text-slate-100 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[var(--brass)] transition"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-slate-700 dark:text-slate-300">
                      Your email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sjenkins@company.com"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 dark:border-white/[0.1] bg-slate-50 dark:bg-[#0c121e] px-3.5 py-2.5 font-body text-sm text-slate-900 dark:text-slate-100 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[var(--brass)] transition"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-slate-700 dark:text-slate-300">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hi Bhumi, I'd love to connect regarding an AI/ML research or engineering opportunity..."
                      className="mt-1.5 w-full rounded-lg border border-slate-300 dark:border-white/[0.1] bg-slate-50 dark:bg-[#0c121e] px-3.5 py-2.5 font-body text-sm text-slate-900 dark:text-slate-100 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[var(--brass)] resize-none transition"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="rounded-lg border border-rose-300 dark:border-rose-900/50 bg-rose-50 dark:bg-rose-950/30 p-3 text-xs text-rose-800 dark:text-rose-300 flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p>{errorMessage}</p>
                        <button
                          type="button"
                          onClick={handleOpenEmailAppFallback}
                          className="mt-1.5 underline font-semibold hover:text-rose-900 dark:hover:text-white"
                        >
                          Open in email app instead →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Buttons: Direct Submit + Copy Message */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--brass)] px-5 py-2.5 text-sm font-semibold text-white dark:text-[#0c121e] hover:bg-[var(--brass-hover)] disabled:opacity-75 transition shadow-sm font-body cursor-pointer"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Sending directly...</span>
                        </>
                      ) : (
                        <>
                          <span>Send message</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 dark:border-white/[0.12] bg-white dark:bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/[0.08] transition font-body shadow-xs"
                    >
                      {copiedMessage ? (
                        <>
                          <Check className="h-4 w-4 text-[var(--teal)]" />
                          <span className="text-[var(--teal)] font-medium">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 text-slate-400" />
                          <span>Copy message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500 dark:text-slate-400">
          <p>© Bhumi Godiwala · Tempe, Arizona · Last updated 2026</p>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-slate-900 dark:hover:text-slate-200 transition">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
