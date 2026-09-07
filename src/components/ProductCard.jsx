import { Minus, Plus, MessageCircle, HelpCircle } from "lucide-react";
import { currencyFormatter, SIZES, JEAN_SIZES, JEAN_SPECIAL_SIZES } from "../data/products";
import { buildProductWhatsAppLink } from "../lib/whatsapp";

const MIN_QTY = 1;
const MAX_QTY = 20;

export default function ProductCard({ product, selection, onSizeChange, onQuantityChange }) {
  const { name, category, price, tag, images, description } = product;
  const { size, quantity } = selection;
  const [coverImage, hoverImage] = images;

  const isJean = category === "jean";
  const regularSizes = isJean ? JEAN_SIZES : SIZES;
  const specialSizes = isJean ? JEAN_SPECIAL_SIZES : [];
  const isSpecialSize = specialSizes.includes(size);

  const whatsappLink = buildProductWhatsAppLink({ name, category, size, quantity, isSpecialSize });

  const decrement = () => onQuantityChange(Math.max(MIN_QTY, quantity - 1));
  const increment = () => onQuantityChange(Math.min(MAX_QTY, quantity + 1));

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-surface transition-colors hover:border-violet/60">
      {/* Foto de producto (1080x1350 → 4:5), con swap suave al hover si hay 2° foto */}
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-hi">
        <img
          src={coverImage}
          alt={`${name} — foto de producto`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {hoverImage && (
          <img
            src={hoverImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
          />
        )}
        {tag && (
          <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-lilac-soft backdrop-blur-sm">
            {tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-display text-base font-semibold text-fg">{name}</h3>
          <p className="mt-0.5 text-xs text-muted">{description}</p>
        </div>

        {isSpecialSize ? (
          <p className="font-display text-lg font-bold text-cyan-soft">A consultar</p>
        ) : (
          <p className="font-display text-lg font-bold text-cyan-soft">{currencyFormatter.format(price)}</p>
        )}

        {/* Selector de talle */}
        <fieldset>
          <legend className="mb-1.5 text-xs font-medium text-muted">Talle</legend>
          <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label={`Talle para ${name}`}>
            {regularSizes.map((sizeOption) => {
              const isActive = sizeOption === size;
              return (
                <button
                  key={sizeOption}
                  type="button"
                  role="radio"
                  aria-checked={isActive}
                  onClick={() => onSizeChange(sizeOption)}
                  className={`h-8 min-w-[2.25rem] rounded-lg border px-2 text-xs font-semibold transition-colors ${
                    isActive
                      ? "border-lilac bg-violet/20 text-lilac-soft"
                      : "border-hairline text-muted hover:border-violet/60 hover:text-fg"
                  }`}
                >
                  {sizeOption}
                </button>
              );
            })}
          </div>

          {specialSizes.length > 0 && (
            <div className="mt-2.5">
              <p className="mb-1.5 flex items-center gap-1 text-[11px] font-medium text-muted">
                <HelpCircle className="h-3 w-3" aria-hidden="true" />
                Talles especiales (consultar precio)
              </p>
              <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label={`Talles especiales para ${name}`}>
                {specialSizes.map((sizeOption) => {
                  const isActive = sizeOption === size;
                  return (
                    <button
                      key={sizeOption}
                      type="button"
                      role="radio"
                      aria-checked={isActive}
                      onClick={() => onSizeChange(sizeOption)}
                      className={`h-8 min-w-[2.25rem] rounded-lg border border-dashed px-2 text-xs font-semibold transition-colors ${
                        isActive
                          ? "border-cyan bg-cyan/10 text-cyan-soft"
                          : "border-hairline text-muted hover:border-cyan/60 hover:text-fg"
                      }`}
                    >
                      {sizeOption}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </fieldset>

        {/* Selector de cantidad */}
        <div>
          <span id={`qty-label-${product.id}`} className="mb-1.5 block text-xs font-medium text-muted">
            Cantidad
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity <= MIN_QTY}
              aria-label={`Restar unidad de ${name}`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-hairline text-fg transition-colors hover:border-violet disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span
              className="w-8 text-center text-sm font-semibold tabular-nums"
              aria-labelledby={`qty-label-${product.id}`}
              aria-live="polite"
            >
              {quantity}
            </span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity >= MAX_QTY}
              aria-label={`Sumar unidad de ${name}`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-hairline text-fg transition-colors hover:border-violet disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet to-lilac py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
        >
          <MessageCircle className="h-4 w-4" />
          {isSpecialSize ? "Consultar por WhatsApp" : "Comprar por WhatsApp"}
        </a>
      </div>
    </article>
  );
}
