import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { CaseStudies } from "@/components/portfolio/CaseStudies";
import { SelectedProjects } from "@/components/portfolio/SelectedProjects";
import { AboutMe } from "@/components/portfolio/AboutMe";
import { Experience } from "@/components/portfolio/Experience";
import { AIExpertise } from "@/components/portfolio/AIExpertise";
import { Toolkit } from "@/components/portfolio/Toolkit";
import { Certifications } from "@/components/portfolio/Certifications";
import { OpenSource } from "@/components/portfolio/OpenSource";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

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
        {/* <AIExpertise /> */}
        <Toolkit />
        <Certifications />
        {/* <OpenSource /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
