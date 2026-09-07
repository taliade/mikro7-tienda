import { useState } from "react";
import { Minus, Plus, Send } from "lucide-react";
import { SIZES } from "../data/products";
import { buildCustomOrderWhatsAppLink } from "../lib/whatsapp";

const MIN_QTY = 1;
const MAX_QTY = 50;

const INITIAL_FORM = {
  fullName: "",
  phone: "",
  email: "",
  size: "M",
  quantity: 1,
  description: "",
  referenceUrl: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function OrderForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const setField = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const adjustQuantity = (delta) =>
    setForm((prev) => ({
      ...prev,
      quantity: Math.min(MAX_QTY, Math.max(MIN_QTY, prev.quantity + delta)),
    }));

  const validate = () => {
    const nextErrors = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Ingresá tu nombre completo.";
    if (!form.phone.trim()) nextErrors.phone = "Ingresá tu teléfono o WhatsApp.";
    if (!form.email.trim()) {
      nextErrors.email = "Ingresá tu correo electrónico.";
    } else if (!EMAIL_PATTERN.test(form.email.trim())) {
      nextErrors.email = "El correo electrónico no es válido.";
    }
    if (!form.description.trim()) nextErrors.description = "Contanos qué modelo/diseño querés encargar.";

    if (form.referenceUrl.trim()) {
      try {
        new URL(form.referenceUrl.trim());
      } catch {
        nextErrors.referenceUrl = "Ingresá una URL válida (https://...).";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    if (!validate()) return;

    const link = buildCustomOrderWhatsAppLink({
      fullName: form.fullName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      size: form.size,
      quantity: form.quantity,
      description: form.description.trim(),
      referenceUrl: form.referenceUrl.trim(),
    });

    window.open(link, "_blank", "noopener,noreferrer");
  };

  const fieldError = (field) => submitted && errors[field];

  return (
    <section
      id="personalizados"
      aria-labelledby="pedido-heading"
      className="border-t border-hairline bg-ink-soft"
    >
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-2">
          <h2 id="pedido-heading" className="font-display text-2xl font-bold sm:text-3xl">
            Pedidos particulares
          </h2>
          <p className="text-sm text-muted">
            ¿Tenés un diseño en mente? Contanos los detalles y coordinamos todo por WhatsApp.
          </p>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 rounded-2xl border border-hairline bg-surface p-5 sm:grid-cols-2 sm:p-8"
        >
          <Field
            label="Nombre completo"
            htmlFor="fullName"
            error={fieldError("fullName") && errors.fullName}
          >
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              value={form.fullName}
              onChange={(e) => setField("fullName", e.target.value)}
              className={inputClass(fieldError("fullName"))}
            />
          </Field>

          <Field label="Teléfono / WhatsApp" htmlFor="phone" error={fieldError("phone") && errors.phone}>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              placeholder="Ej: +54 9 11 1234-5678"
              value={form.phone}
              onChange={(e) => setField("phone", e.target.value)}
              className={inputClass(fieldError("phone"))}
            />
          </Field>

          <Field
            label="Correo electrónico"
            htmlFor="email"
            error={fieldError("email") && errors.email}
            className="sm:col-span-2"
          >
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              className={inputClass(fieldError("email"))}
            />
          </Field>

          <Field label="Talle base" htmlFor="size">
            <select
              id="size"
              name="size"
              value={form.size}
              onChange={(e) => setField("size", e.target.value)}
              className={inputClass(false)}
            >
              {SIZES.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Cantidad" htmlFor="quantity">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => adjustQuantity(-1)}
                disabled={form.quantity <= MIN_QTY}
                aria-label="Restar unidad"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-hairline text-fg transition-colors hover:border-violet disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span id="quantity" className="w-10 text-center text-sm font-semibold tabular-nums" aria-live="polite">
                {form.quantity}
              </span>
              <button
                type="button"
                onClick={() => adjustQuantity(1)}
                disabled={form.quantity >= MAX_QTY}
                aria-label="Sumar unidad"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-hairline text-fg transition-colors hover:border-violet disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </Field>

          <Field
            label="Modelo / descripción detallada"
            htmlFor="description"
            error={fieldError("description") && errors.description}
            className="sm:col-span-2"
          >
            <textarea
              id="description"
              name="description"
              rows={4}
              required
              placeholder="Ej: Remera oversize negra con estampa del logo del grupo en frente, y nombre en la espalda."
              value={form.description}
              onChange={(e) => setField("description", e.target.value)}
              className={inputClass(fieldError("description"))}
            />
          </Field>

          <Field
            label="Enlace de referencia (Drive, Pinterest, etc.)"
            htmlFor="referenceUrl"
            error={fieldError("referenceUrl") && errors.referenceUrl}
            className="sm:col-span-2"
            optional
          >
            <input
              id="referenceUrl"
              name="referenceUrl"
              type="url"
              placeholder="https://"
              value={form.referenceUrl}
              onChange={(e) => setField("referenceUrl", e.target.value)}
              className={inputClass(fieldError("referenceUrl"))}
            />
          </Field>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet to-lilac py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.01] sm:col-span-2"
          >
            <Send className="h-4 w-4" />
            Enviar pedido por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, htmlFor, error, children, className = "", optional = false }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={htmlFor} className="text-xs font-medium text-muted">
        {label} {optional && <span className="text-muted/70">(opcional)</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-xs font-medium text-rose-400">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError) {
  return `w-full rounded-lg border bg-ink px-3 py-2.5 text-sm text-fg placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-violet/50 ${
    hasError ? "border-rose-500" : "border-hairline"
  }`;
}
