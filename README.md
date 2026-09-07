# Mikro 7 — Tienda K-Pop

SPA de e-commerce de nicho K-Pop construida con **React + Vite + Tailwind CSS v4** y
**lucide-react**. Incluye catálogo de 8 productos con compra rápida por WhatsApp
y formulario de pedidos particulares.

## Empezar

```bash
npm install
npm run dev
```

## Configuración

El número de WhatsApp real ya está cargado en `.env` (no se commitea, ver
`.gitignore`) y como fallback en el código. Para cambiarlo, copiá
`.env.example` a `.env` si no existe y completá:

- `VITE_WHATSAPP_NUMBER`: número de WhatsApp de la tienda, formato internacional
  sin `+` (actual: `5491176661070` → +54 11 7666-1070, con el "9" que WhatsApp
  requiere para celulares argentinos).

## Estructura

```
src/
  IMG/          logo.png, nombre-logo.png, icono.ico, banner-footer.png — assets de marca
  components/   Header, Hero, Catalog, ProductCard, OrderForm, Footer
  data/         products.js — catálogo y helpers de formato de precio
  lib/          whatsapp.js — generación de links wa.me
                cookies.js — helpers de lectura/escritura de cookies
  hooks/        useVisitCounter.js — contador de visitas por dispositivo (cookie)
```

## Contador de visitas (cookies)

El footer muestra cuántas veces entró **ese mismo navegador/dispositivo** a la
tienda, usando una cookie propia (`mikro7_visits`, 1 año de duración) —
ver [`src/hooks/useVisitCounter.js`](src/hooks/useVisitCounter.js).

⚠️ Al ser una cookie de navegador, este número es por dispositivo, no un
contador global de "visitas totales del sitio" (eso requeriría un backend o
un servicio de analítica como Plausible/Google Analytics).

## Placeholders a reemplazar

| Qué | Dónde | Cómo |
| --- | --- | --- |
| Número de WhatsApp | `.env` → `VITE_WHATSAPP_NUMBER` | ✅ Ya cargado: `5491176661070` |
| Logo, favicon y banner | `src/IMG/*` | ✅ Ya cargados y usados en `Header.jsx` / `Footer.jsx` / `index.html` |
| Imágenes de producto | `src/data/products.js` → campo `image` | Reemplazar `null` por la URL de cada foto |
| Redes sociales | `src/components/Footer.jsx` → `SOCIAL_LINKS` | Actualizar URLs reales |

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción
- `npm run preview` — sirve el build de producción localmente
- `npm run lint` — linting con oxlint
