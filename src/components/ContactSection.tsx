// SOLID: Single Responsibility - Sección de contacto con formulario
import { useState, useEffect } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection = () => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Ingresa tu nombre para continuar.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es necesario para responder.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Usa un formato válido: ejemplo@dominio.com';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Cuéntame brevemente de qué trata tu proyecto…';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Describe tu idea o proyecto para poder ayudarte.';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Escribe al menos 20 caracteres para dar más contexto.';
    }

    setErrors(newErrors);
    setSubmitError(null);

    if (Object.keys(newErrors).length > 0) {
      const firstKey = Object.keys(newErrors)[0] as keyof FormErrors;
      setTimeout(() => {
        const el = document.querySelector(`[name="${firstKey}"]`) as HTMLInputElement | HTMLTextAreaElement;
        el?.focus();
      }, 0);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState === 'submitting') return;

    if (!validateForm()) return;

    setFormState('submitting');
    setErrors({});
    setSubmitError(null);

    try {
      // Simular envío - conecta aquí tu API (Formspree, Resend, etc.)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormState('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setFormState('error');
      setSubmitError('Fallo al enviar. Verifica tu conexión e inténtalo de nuevo.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const hasUnsavedChanges =
    formState === 'idle' &&
    (formData.name || formData.email || formData.subject || formData.message);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges]);

  return (
    <section
      id="contacto"
      className="max-w-7xl mx-auto mb-24 px-4 md:px-8 lg:px-12 scroll-mt-24"
    >
      <div className="glass-card p-8 md:p-12 lg:p-16 relative overflow-hidden">
        {/* Decorative Elements - estilo coherente con AboutSection */}
        <div className="absolute top-12 right-12 flex flex-col gap-1" aria-hidden="true">
          <div className="w-2 h-6 bg-accent-cyan/40 rounded-full" />
          <div className="w-6 h-2 bg-accent-cyan/40 rounded-full" />
        </div>
        <div className="absolute bottom-12 left-12 flex items-center gap-1" aria-hidden="true">
          <div className="w-2 h-6 bg-accent-purple/40 rounded-full" />
          <div className="w-6 h-2 bg-accent-purple/40 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Intro */}
          <div className="space-y-6">
            <span className="font-mono text-accent-cyan text-xs tracking-widest uppercase block">
              // contacto
            </span>
            <h2 className="text-4xl md:text-5xl font-black" style={{ textWrap: 'balance' }}>
              ¿Tienes un <span className="gradient-text">proyecto</span> en mente?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed" style={{ textWrap: 'pretty' }}>
              Escríbeme y cuéntame tu idea. Respondo en menos de 24&nbsp;h.
            </p>

            {/* Terminal-style info */}
            <div className="font-mono text-sm text-gray-500 space-y-1 pt-4 border-t border-gray-800">
              <p><span className="text-accent-cyan">&gt;</span> Envía tu mensaje</p>
              <p><span className="text-accent-cyan">&gt;</span> Reviso tu propuesta</p>
              <p><span className="text-accent-cyan">&gt;</span> Te respondo con un plan</p>
            </div>

            {/* Direct contact */}
            <div className="pt-4">
              <p className="text-xs text-gray-600 mb-3">O envía directamente a:</p>
              <a
                href="mailto:contacto@carlosluna.dev"
                className="font-mono text-accent-cyan hover:text-accent-cyan/80 focus-visible:outline-2 focus-visible:outline-accent-cyan focus-visible:outline-offset-4 transition-colors break-all"
              >
                contacto@carlosluna.dev
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-6"
          >
            {/* Async status - aria-live para accesibilidad */}
            {(formState === 'success' || formState === 'error') && (
              <div
                role="status"
                aria-live="polite"
                className={`p-4 rounded-xl font-mono text-sm ${
                  formState === 'success'
                    ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                    : 'bg-red-500/10 border border-red-500/30 text-red-400'
                }`}
              >
                {formState === 'success'
                  ? '✓ Mensaje enviado. Te responderé pronto.'
                  : '✗ ' + (submitError || 'Error al enviar. Inténtalo de nuevo.')}
              </div>
            )}

            {/* Nombre */}
            <div>
              <label htmlFor="contact-name" className="block font-mono text-xs text-gray-500 uppercase tracking-wider mb-2">
                nombre
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                placeholder="Tu nombre o empresa…"
                spellCheck={false}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                disabled={formState === 'submitting'}
                className="w-full px-4 py-3 bg-black/30 border rounded-xl font-mono text-sm
                  placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent
                  focus-visible:ring-2 focus-visible:ring-accent-cyan
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-colors
                  invalid:border-red-500/50
                  border-gray-700 hover:border-gray-600"
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-sm text-red-400 font-mono">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="block font-mono text-xs text-gray-500 uppercase tracking-wider mb-2">
                email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                inputMode="email"
                placeholder="tu@email.com…"
                spellCheck={false}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                disabled={formState === 'submitting'}
                className="w-full px-4 py-3 bg-black/30 border rounded-xl font-mono text-sm
                  placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent
                  focus-visible:ring-2 focus-visible:ring-accent-cyan
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-colors
                  invalid:border-red-500/50
                  border-gray-700 hover:border-gray-600"
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-sm text-red-400 font-mono">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Asunto */}
            <div>
              <label htmlFor="contact-subject" className="block font-mono text-xs text-gray-500 uppercase tracking-wider mb-2">
                asunto
              </label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                autoComplete="off"
                placeholder="ej: Landing page para SaaS…"
                spellCheck={false}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
                disabled={formState === 'submitting'}
                className="w-full px-4 py-3 bg-black/30 border rounded-xl font-mono text-sm
                  placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent
                  focus-visible:ring-2 focus-visible:ring-accent-cyan
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-colors
                  invalid:border-red-500/50
                  border-gray-700 hover:border-gray-600"
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1.5 text-sm text-red-400 font-mono">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="contact-message" className="block font-mono text-xs text-gray-500 uppercase tracking-wider mb-2">
                mensaje
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe tu proyecto, presupuesto estimado y timeline…"
                rows={4}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                disabled={formState === 'submitting'}
                className="w-full px-4 py-3 bg-black/30 border rounded-xl font-mono text-sm resize-y min-h-[120px]
                  placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent
                  focus-visible:ring-2 focus-visible:ring-accent-cyan
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-colors
                  invalid:border-red-500/50
                  border-gray-700 hover:border-gray-600"
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-sm text-red-400 font-mono">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={formState === 'submitting'}
              className="w-full md:w-auto px-8 py-4 rounded-xl font-bold text-sm
                bg-accent-cyan text-black
                hover:bg-white
                focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark
                disabled:opacity-70 disabled:cursor-not-allowed
                transition-colors flex items-center justify-center gap-2"
            >
              {formState === 'submitting' ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" aria-hidden="true" />
                  Enviando…
                </>
              ) : (
                <>
                  Enviar Mensaje
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
