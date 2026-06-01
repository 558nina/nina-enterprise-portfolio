import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMetrics from "@/components/TrustMetrics";
import CareerTimeline from "@/components/CareerTimeline";
import TechnicalProof from "@/components/TechnicalProof";
import Services from "@/components/Services";
import ResourcesPreview from "@/components/ResourcesPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white">
      <Navbar />

      <Hero />

      <TrustMetrics />

      <CareerTimeline />

      <TechnicalProof />

      <Services />

      <ResourcesPreview />

      <Contact />

      <Footer />
    </main>
  );
}