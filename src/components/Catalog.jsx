import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

const DEFAULT_SIZE = "M";
const DEFAULT_QTY = 1;

function buildInitialSelections() {
  return Object.fromEntries(
    products.map((product) => [product.id, { size: DEFAULT_SIZE, quantity: DEFAULT_QTY }])
  );
}

export default function Catalog() {
  // Estado independiente de talle/cantidad por cada producto, indexado por id.
  const [selections, setSelections] = useState(buildInitialSelections);

  const updateSelection = (productId, patch) => {
    setSelections((prev) => ({
      ...prev,
      [productId]: { ...prev[productId], ...patch },
    }));
  };

  return (
    <section id="catalogo" aria-labelledby="catalogo-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-2">
        <h2 id="catalogo-heading" className="font-display text-2xl font-bold sm:text-3xl">
          Catálogo
        </h2>
        <p className="max-w-2xl text-sm text-muted">
          Elegí talle y cantidad, y encargá tu prenda al instante por WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            selection={selections[product.id]}
            onSizeChange={(size) => updateSelection(product.id, { size })}
            onQuantityChange={(quantity) => updateSelection(product.id, { quantity })}
          />
        ))}
      </div>
    </section>
  );
}
