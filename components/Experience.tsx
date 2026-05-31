import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    organisation: "London Stock Exchange Group",
    role: "Scrum Master / Agile Delivery Lead",
    period: "2024 - Present",
    challenge:
      "Improve delivery predictability and governance across DevOps teams supporting strategic technology initiatives.",
    approach:
      "Introduced forecasting metrics, dependency management, delivery governance and OKR alignment across multiple teams.",
    outcome:
      "Improved delivery predictability and strengthened stakeholder confidence through transparent reporting and execution visibility.",
    tags: ["Agile Delivery", "DevOps", "Forecasting", "Governance"],
  },
  {
    organisation: "Legal & General",
    role: "Digital Scrum Master",
    period: "2022 - 2023",
    challenge:
      "Support enterprise technology transformation while improving delivery planning and execution.",
    approach:
      "Implemented forecasting practices, facilitated stakeholder alignment and embedded Agile governance.",
    outcome: "Increased delivery throughput by 25%.",
    tags: ["Transformation", "Agile", "Enterprise Delivery"],
  },
  {
    organisation: "Capgemini",
    role: "Engagement Manager",
    period: "2020 - 2022",
    challenge:
      "Lead multiple transformation engagements across cloud migration, IAM and DevSecOps initiatives.",
    approach:
      "Managed delivery planning, governance, forecasting and stakeholder engagement across enterprise clients.",
    outcome:
      "Delivered measurable improvements in cost optimisation, lead times and release quality.",
    tags: ["Cloud", "IAM", "DevSecOps", "Consulting"],
  },
  {
    organisation: "Marks & Spencer",
    role: "Project Manager",
    period: "2018 - 2019",
    challenge:
      "Deliver a ServiceNow transformation aligned to business and operational objectives.",
    approach:
      "Led governance, planning, stakeholder engagement and iterative delivery practices.",
    outcome: "Delivered on time and achieved 95% stakeholder satisfaction.",
    tags: ["ServiceNow", "Governance", "Delivery"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0B0F1A] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Transformation Experience
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Selected Transformation Experience
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Delivering Agile, cloud, DevOps and enterprise transformation
            initiatives across financial services, healthcare, retail and
            aviation.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.organisation} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}