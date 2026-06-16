"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (response.ok) {
      setSuccess(true);

      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    }
  }

  return (
    <section id="contact" className="bg-[#0B0F1A] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-white/[0.04] to-blue-500/10 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
                Work With Me
              </p>

              <h2 className="text-4xl font-bold md:text-5xl">
                Need delivery leadership, coaching or transformation support?
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                I support organisations with Agile delivery, governance and
                transformation challenges, while also mentoring individuals
                building careers in Scrum, project management and delivery
                leadership.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
              <p className="text-lg font-semibold text-white">
                Start with a conversation
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Complete the form below and I'll respond as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white"
                />

                <input
                  type="text"
                  placeholder="Company (Optional)"
                  value={form.company}
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white"
                />

                <textarea
                  placeholder="How can I help?"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {success && (
                  <p className="text-center text-sm text-green-400">
                    Thank you. Your message has been sent successfully.
                  </p>
                )}
              </form>

              <p className="mt-4 text-center text-xs text-slate-500">
                Consulting · Coaching · Templates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}