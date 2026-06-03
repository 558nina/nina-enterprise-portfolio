export default function LearningHub() {
  return (
    <section
      id="learning-hub"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Cloud & AWS Learning Hub
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Practical Cloud Delivery, Governance & Transformation Leadership
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Explore practical AWS demonstrations alongside delivery leadership
            insights designed for Programme Managers, Scrum Masters, PMO
            Leaders and Transformation Consultants.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_50px_rgba(34,211,238,0.08)]">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-200">
                AWS Hands-On Series
              </span>

              <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                Series Planned
              </span>
            </div>

            <h3 className="text-2xl font-bold">
              Learn AWS Through Practical Demonstrations
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Build practical AWS knowledge through guided demonstrations
              covering core cloud services, networking, security and monitoring.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/5 px-3 py-2 text-sm text-slate-300">
                EC2
              </span>

              <span className="rounded-full bg-white/5 px-3 py-2 text-sm text-slate-300">
                S3
              </span>

              <span className="rounded-full bg-white/5 px-3 py-2 text-sm text-slate-300">
                VPC
              </span>

              <span className="rounded-full bg-white/5 px-3 py-2 text-sm text-slate-300">
                IAM
              </span>

              <span className="rounded-full bg-white/5 px-3 py-2 text-sm text-slate-300">
                Lambda
              </span>

              <span className="rounded-full bg-white/5 px-3 py-2 text-sm text-slate-300">
                RDS
              </span>

              <span className="rounded-full bg-white/5 px-3 py-2 text-sm text-slate-300">
                CloudWatch
              </span>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm text-slate-400">
                8 Video Series • 5–10 Minutes Each
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_50px_rgba(34,211,238,0.08)]">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-200">
                AWS for Delivery Leaders
              </span>

              <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                Series Planned
              </span>
            </div>

            <h3 className="text-2xl font-bold">
              Cloud Governance & Transformation Leadership
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Understand how Agile delivery, governance, RAID management,
              programme leadership and cloud transformation intersect in AWS
              environments.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/5 px-3 py-2 text-sm text-slate-300">
                Migration Programmes
              </span>

              <span className="rounded-full bg-white/5 px-3 py-2 text-sm text-slate-300">
                Governance
              </span>

              <span className="rounded-full bg-white/5 px-3 py-2 text-sm text-slate-300">
                RAID Management
              </span>

              <span className="rounded-full bg-white/5 px-3 py-2 text-sm text-slate-300">
                Steering Committees
              </span>

              <span className="rounded-full bg-white/5 px-3 py-2 text-sm text-slate-300">
                Delivery Metrics
              </span>

              <span className="rounded-full bg-white/5 px-3 py-2 text-sm text-slate-300">
                CI/CD Governance
              </span>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm text-slate-400">
                8 Video Series • 5–7 Minutes Each
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-transparent p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Featured First Episode
          </p>

          <h3 className="mt-4 text-3xl font-bold">
            AWS for Scrum Masters and Delivery Leaders:
            <br />
            What You Need to Know
          </h3>

          <p className="mt-4 max-w-3xl text-slate-300">
            An executive-level introduction to AWS services, cloud terminology,
            governance considerations and delivery practices that every Scrum
            Master, Programme Manager and Transformation Leader should
            understand.
          </p>

          <div className="mt-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Launching Soon
          </div>
        </div>
      </div>
    </section>
  );
}