"use client";

import { products } from "@/lib/products";

export default function GovernanceSuite() {
  const steeringPack = products.find(
    (product) => product.id === "steering-committee-pack"
  );

  const raidDashboard = products.find(
    (product) => product.id === "raid-dashboard"
  );

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
    <section
      id="governance-suite"
      className="bg-[#07111F] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Governance Suite
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Governance Assets Built for Delivery Leaders
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Practical governance products designed to support executive
            reporting, programme control, risk management and steering
            committee decision-making.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_50px_rgba(34,211,238,0.08)]">
            <img
              src="/images/steering-committee-reporting-pack-preview.png"
              alt="Steering Committee Reporting Pack"
              className="h-56 w-full object-cover object-top"
            />

            <div className="p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-200">
                  Governance & PMO
                </span>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Available
                </span>
              </div>

              <h3 className="text-2xl font-bold">
                Steering Committee Reporting Pack™ v1.0
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                A premium executive governance reporting framework featuring
                executive dashboards, governance reporting, financial oversight,
                programme roadmaps and decision tracking.
              </p>

              {steeringPack?.price && (
                <p className="mt-4 text-lg font-bold text-cyan-300">
                  {steeringPack.price}
                </p>
              )}

              <button
                type="button"
                onClick={() => handleCheckout("steering-committee-pack")}
                className="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Buy Pack
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_50px_rgba(34,211,238,0.08)]">
            <img
              src="/images/enterprise-raid-dashboard-preview.png"
              alt="Enterprise RAID Dashboard"
              className="h-56 w-full object-cover object-top"
            />

            <div className="p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-200">
                  Governance & Delivery
                </span>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Available
                </span>
              </div>

              <h3 className="text-2xl font-bold">
                Enterprise RAID Log & Governance Dashboard
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                PMO-ready RAID management and governance dashboard featuring
                Governance Exposure scoring, programme health indicators,
                executive reporting and stakeholder controls.
              </p>

              {raidDashboard?.price && (
                <p className="mt-4 text-lg font-bold text-cyan-300">
                  {raidDashboard.price}
                </p>
              )}

              <button
                type="button"
                onClick={() => handleCheckout("raid-dashboard")}
                className="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Buy Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}