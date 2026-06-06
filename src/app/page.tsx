import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { AboutMe } from "@/components/sections/AboutMe";
import { Experience } from "@/components/sections/Experience";
import { AIExpertise } from "@/components/sections/AIExpertise";
import { Toolkit } from "@/components/sections/Toolkit";
import { Certifications } from "@/components/sections/Certifications";
import { OpenSource } from "@/components/sections/OpenSource";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CaseStudies />
        <SelectedProjects />
        <AboutMe />
        <Experience />
        <AIExpertise />
        <Toolkit />
        <Certifications />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
