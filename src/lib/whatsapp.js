/**
 * Helpers para generar links de WhatsApp (wa.me) con mensajes prearmados.
 *
 * Número de WhatsApp de la tienda: +54 11 7666-1070 (celular argentino).
 * Para wa.me se usa el formato internacional sin "+" ni espacios, con el "9"
 * que WhatsApp requiere para celulares argentinos después del código de país:
 * 54 + 9 + 11 (código de área) + 76661070 -> "5491176661070".
 * Podés sobreescribirlo con la variable de entorno VITE_WHATSAPP_NUMBER
 * (archivo .env, ver .env.example).
 */
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "5491176661070";

/**
 * Arma la URL de WhatsApp para una compra rápida de producto.
 * @param {{ name: string, size: string, quantity: number }} params
 */
export function buildProductWhatsAppLink({ name, size, quantity }) {
  const message = `¡Hola Mikro 7! Quiero encargar la remera ${name} en talle ${size}, cantidad: ${quantity}. ¿Tienen stock?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Arma la URL de WhatsApp para un pedido particular (formulario custom).
 * @param {{
 *   fullName: string,
 *   phone: string,
 *   email: string,
 *   size: string,
 *   quantity: number,
 *   description: string,
 *   referenceUrl?: string,
 * }} params
 */
export function buildCustomOrderWhatsAppLink({
  fullName,
  phone,
  email,
  size,
  quantity,
  description,
  referenceUrl,
}) {
  const lines = [
    "¡Hola Mikro 7! Quiero hacer un pedido particular.",
    `Nombre: ${fullName}`,
    `WhatsApp: ${phone}`,
    `Correo: ${email}`,
    `Talle base: ${size}`,
    `Cantidad: ${quantity}`,
    `Descripción del modelo: ${description}`,
  ];

  if (referenceUrl) {
    lines.push(`Referencia visual: ${referenceUrl}`);
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}
