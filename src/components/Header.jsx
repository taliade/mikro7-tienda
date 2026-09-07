import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { WHATSAPP_NUMBER } from "../lib/whatsapp";
import logo from "../IMG/logo.webp";
import nombreLogo from "../IMG/nombre-logo.webp";

const NAV_LINKS = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#personalizados", label: "Personalizados" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const contactHref = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <a href="#top" aria-label="Mikro 7 — Ir al inicio" className="flex shrink-0 items-center gap-4">
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="h-16 w-16 rounded-lg object-cover ring-1 ring-ink/15 sm:h-20 sm:w-20"
          />
          <img
            src={nombreLogo}
            alt="Mikro 7 · Estampas de indumentaria"
            className="h-16 w-auto rounded-md sm:h-20"
          />
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-violet"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={contactHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-violet hover:text-violet sm:flex"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
            Contacto
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Navegación móvil"
          className="border-t border-hairline bg-cream px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-2 py-2 text-sm font-medium text-ink hover:bg-ink/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={contactHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-violet"
              >
                <MessageCircle className="h-4 w-4" />
                Contacto por WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
