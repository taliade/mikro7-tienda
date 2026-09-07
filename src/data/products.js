// Se usan las versiones .webp (comprimidas desde los .png originales de 1080x1350,
// que se mantienen en src/IMG como respaldo en alta resolución) para que el
// catálogo cargue rápido: ver optimize-images.mjs en la raíz del proyecto.
import img1 from "../IMG/1.webp";
import img2 from "../IMG/2.webp";
import img3 from "../IMG/3.webp";
import img4 from "../IMG/4.webp";
import img5 from "../IMG/5.webp";
import img6 from "../IMG/6.webp";
import img7 from "../IMG/7.webp";
import img8 from "../IMG/8.webp";
import img9 from "../IMG/9.webp";
import img10 from "../IMG/10.webp";
import img11 from "../IMG/11.webp";
import img12 from "../IMG/12.webp";

/**
 * Catálogo de productos — Mikro 7
 * Fotos reales en src/IMG (1080x1350, formato 4:5). Cada producto tiene 1 o 2
 * imágenes: cuando hay 2, la segunda se muestra al pasar el mouse (hover).
 */
export const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

export const products = [
  {
    id: "Remera-BTS-Dynamite-Neon",
    name: "Remera BTS Dynamite Neon",
    tag: "Dynamite",
    price: 24999,
    images: [img1, img2],
    description: "Ilustración urbana de los siete miembros enmarcados con trazos estilo graffiti, smileys y detalles neón de estética retro.",
  },
  {
    id: "Remera-BTS-Mic-Drop-Dark",
    name: "Remera BTS Mic Drop Dark",
    tag: "Nuevo",
    price: 27999,
    images: [img3, img4],
    description: "Composición monocromática de la banda con acentos rojizos y estética cyberpunk, destacando retratos individuales sobre fondo oscuro.",
  },
  {
    id: "Remera-BTS-Memories-Scrapbook",
    name: "Remera BTS Memories Scrapbook",
    tag: null,
    price: 25999,
    images: [img5, img6],
    description: "Mosaico nostálgico compuesto por fotos instantáneas, fotogramas de película y recortes de las diferentes eras de la banda.",
  },
  {
    id: "Remera-BTS-Arirang-Heritage",
    name: "Remera BTS Arirang Heritage",
    tag: "Edición limitada",
    price: 24999,
    images: [img7, img8],
    description: "Retrato grupal enmarcado en un emblema circular carmesí con tipografía estilizada inspirada en el folclore y giras del grupo.",
  },
  {
    id: "jean-yet-to-come",
    name: "Jean Yet to Come Nostalgia Wide Leg",
    tag: null,
    price: 43999,
    images: [img9],
    description: "Jean wide leg en tono celeste medio. Cuenta con un parche fotográfico estilo collage en una pierna con imágenes de diferentes eras de la banda. En la otra pierna, los nombres de los siete miembros están bordados en hilo blanco con tipografía elegante.",
  },
  {
    id: "Jean-Butter-Streetwide",
    name: "Jean Butter Streetwide",
    tag: null,
    price: 45999,
    images: [img10],
    description: "Jean wide leg con un diseño asimétrico de photocards y parches de estética urbana. Incluye parches grandes de logos icónicos de la era Butter y una réplica de una photocard tipo polaroid. Los pequeños detalles de parches de estrellas y la mezcla de fotos le dan un look streetwear muy actual y original.",
  },
  {
    id: "Jean-Proof-Tour-Wide-Leg",
    name: "Jean Proof Tour Wide Leg",
    tag: "Nuevo",
    price: 39999,
    images: [img11],
    description: "Jean wide leg celeste claro con un diseño full print muy llamativo. Presenta múltiples parches estampados, incluyendo fotos grupales de gran tamaño, y una silueta de los miembros en el escenario de la era Proof. El detalle de la foto de gran tamaño en la parte superior del muslo lo convierte en una pieza central para cualquier outfit de concierto.",
  },
  {
    id: "Jean-Map-of-the-Soul-Purple-Moon-Wide-Leg",
    name: "Jean Map of the Soul Purple Moon Wide Leg",
    tag: "Map of the Soul",
    price: 47999,
    images: [img12],
    description: "Jean wide leg oversize con un impactante degradado de color: de azul oscuro a violeta intenso en la parte inferior. El diseño presenta un estampado gráfico a gran escala de una silueta de la banda bajo una luna, evocando la estética de Map of the Soul. Los parches de logos geométricos y el acabado desgastado le dan un aire vanguardista y único.",
  },
];

export const currencyFormatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});
