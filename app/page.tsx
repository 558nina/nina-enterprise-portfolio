import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import GovernanceSuite from "@/components/GovernanceSuite";
import CareerTimeline from "@/components/CareerTimeline";
import LearningHub from "@/components/LearningHub";
import ResourcesPreview from "@/components/ResourcesPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white">
      <Navbar />

      <Hero />

      <LogoMarquee />

      <Services />

      <GovernanceSuite />

      <CareerTimeline />

      <LearningHub />

      <ResourcesPreview />

      <Contact />

      <Footer />
    </main>
  );
}