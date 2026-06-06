import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdul Rehman | Senior Full-Stack & GenAI Architect",
  description: "Senior Full-Stack Engineer specializing in MERN, PERN, GenAI, Agentic AI, SaaS Development, and Product Engineering. Helping startups build scalable products and intelligent multi-agent systems.",
  keywords: [
    "Full-Stack Engineer",
    "MERN Stack Developer",
    "PERN Stack Developer",
    "GenAI Engineer",
    "Agentic AI Developer",
    "LangGraph Expert",
    "SaaS Product Architect",
    "React Developer",
    "NodeJS Architect",
    "AI SaaS Developer"
  ],
  authors: [{ name: "Abdul Rehman", url: "https://github.com" }],
  creator: "Abdul Rehman",
  openGraph: {
    title: "Abdul Rehman | Senior Full-Stack & GenAI Architect",
    description: "SaaS Product Engineering and Agentic AI Developer. Specialist in scalable architectures, custom RAG systems, and autonomous multi-agent pipelines.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col selection:bg-primary selection:text-black">
        {children}
      </body>
    </html>
  );
}
