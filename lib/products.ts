export type Product = {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  priceId: string;
  fileName: string;
  status: "Available" | "Coming Soon";
};

export const products: Product[] = [
  {
    id: "ai-readiness-assessment",
    title: "AI Readiness Assessment",
    category: "AI Strategy",
    description:
      "A structured framework to evaluate organisational readiness for AI adoption across people, process and technology.",
    price: "£29",
    priceId: "price_1The1TRu1qmiSoxfNhyh4WOf",
    fileName: "AI_Readiness_Assessment V1.xlsx",
    status: "Available",
  },

  {
    id: "raid-dashboard",
    title: "Enterprise RAID Dashboard",
    category: "Governance & Delivery",
    description:
      "PMO-ready RAID management and governance dashboard featuring Governance Exposure scoring, programme health indicators, executive reporting and stakeholder controls.",
    price: "£39",
    priceId: "price_1Ti4woRu1qmiSoxfZJWY223K",
    fileName: "Enterprise-RAID-Governance-Dashboard-v1.0.xlsx",
    status: "Available",
  },

  {
    id: "steering-committee-pack",
    title: "Steering Committee Reporting Pack",
    category: "Governance & PMO",
    description:
      "A premium executive governance reporting framework featuring executive dashboards, governance reporting, financial oversight, programme roadmaps and decision tracking.",
    price: "£49",
    priceId: "price_1Ti4xwRu1qmiSoxfUQpaywYH",
    fileName: "Steering-Committee-Reporting-Pack-v1.0.pptx",
    status: "Available",
  },

  {
    id: "ai-governance-pack",
    title: "AI Governance Pack",
    category: "AI & Delivery",
    description:
      "Practical governance templates covering AI adoption, approvals, risk controls, auditability and responsible usage.",
    price: "£49",
    priceId: "",
    fileName: "AI_Governance_Pack_V1.zip",
    status: "Coming Soon",
  },
];