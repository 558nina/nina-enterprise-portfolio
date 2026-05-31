export default function Contact() {
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
                Send a short note about what you need support with and I’ll
                respond with the most suitable next step.
              </p>

              <a
                href="mailto:hesse.nina@yahoo.co.uk"
                className="mt-6 inline-flex w-full justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Email Nina
              </a>

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