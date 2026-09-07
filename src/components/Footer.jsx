import { Camera, Cookie, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "../lib/whatsapp";
import { useVisitCounter } from "../hooks/useVisitCounter";
import bannerFooter from "../IMG/banner-footer.webp";

// Nota: lucide-react ya no incluye íconos de marcas registradas (ej. Instagram),
// por lo que se usa un ícono genérico equivalente (Camera) como estampilla visual.
const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/mikro7", icon: Camera },
  {
    label: "WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: MessageCircle,
  },
];

export default function Footer() {
  const { count, isFirstVisit } = useVisitCounter();

  return (
    <footer className="border-t border-hairline bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <img
            src={bannerFooter}
            alt="Mikro 7"
            className="h-14 w-auto rounded-lg sm:h-16"
          />

          <ul className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-muted transition-colors hover:border-violet hover:text-lilac-soft"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contador de visitas por dispositivo, basado en cookies (ver useVisitCounter). */}
        {count > 0 && (
          <p
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1.5 text-xs font-medium text-cyan-soft"
            aria-live="polite"
          >
            <Cookie className="h-3.5 w-3.5" aria-hidden="true" />
            {isFirstVisit
              ? "¡Bienvenido/a a Mikro 7! Esta es tu primera visita."
              : `Visitaste Mikro 7 ${count} ${count === 1 ? "vez" : "veces"} desde este dispositivo.`}
          </p>
        )}

        <div className="mt-6 flex flex-col gap-2 border-t border-hairline pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mikro 7. Todos los derechos reservados.</p>
          <p>
            Los tiempos de entrega y stock se confirman por WhatsApp al momento del pedido.{" "}
            <span className="text-muted/70">Términos y condiciones aplican.</span>
          </p>
        </div>

        <p className="mt-3 text-[11px] leading-relaxed text-muted/70">
          Este sitio usa una cookie propia (no de terceros, no publicitaria) para recordar
          cuántas veces visitaste la tienda desde este navegador.
        </p>
      </div>
    </footer>
  );
}
