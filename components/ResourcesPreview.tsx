"use client";

import { products } from "@/lib/products";

export default function ResourcesPreview() {
  const handleCheckout = async (productId: string) => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Unable to start checkout. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Unable to start checkout. Please try again.");
    }
  };

  return (
    <section id="resources" className="bg-[#0B0F1A] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Premium Resources & Templates
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Practical Delivery Assets
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            A growing collection of delivery templates, governance frameworks,
            AI adoption assets and practical tools developed through enterprise
            transformation experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:shadow-[0_0_50px_rgba(34,211,238,0.08)]"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-200">
                  {product.category}
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-400">
                  {product.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                {product.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {product.description}
              </p>

              {product.price && (
                <p className="mt-4 text-lg font-bold text-cyan-300">
                  {product.price}
                </p>
              )}

              <div className="mt-8 border-t border-white/10 pt-6">
                {product.status === "Available" && product.priceId ? (
                  <button
                    type="button"
                    onClick={() => handleCheckout(product.id)}
                    className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                  >
                    Buy Template →
                  </button>
                ) : (
                  <span className="text-sm font-semibold text-cyan-300">
                    Coming Soon →
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}