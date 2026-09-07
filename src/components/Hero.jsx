import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden border-b border-hairline"
    >
      {/* Fondo con glows holográficos */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet/30 blur-3xl" />
        <div className="absolute -right-16 top-24 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-lilac/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[size:28px_28px]" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/70 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-lilac-soft">
          <Sparkles className="h-3.5 w-3.5" />
          Nueva colección
        </span>

        <h1
          id="hero-heading"
          className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Vestí tu{" "}
          <span className="bg-gradient-to-r from-violet via-lilac to-cyan bg-clip-text text-transparent">
            bias era
          </span>
        </h1>

        <p className="max-w-xl text-base text-muted sm:text-lg">
          Remeras y buzos de inspiración K-Pop, diseño limitado y calidad premium.
          Elegí tu modelo, tu talle, y encargalo directo por WhatsApp en segundos.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#catalogo"
            className="holo-border group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-lilac px-6 py-3 text-sm font-semibold text-ink shadow-lg shadow-violet/30 transition-transform hover:scale-[1.03]"
          >
            Ver catálogo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#personalizados"
            className="inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-cyan hover:text-cyan-soft"
          >
            Pedido personalizado
          </a>
        </div>
      </div>
    </section>
  );
}
