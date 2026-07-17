import type { Metadata } from "next";
import "@/styles/globals.css";

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
  icons: {
    icon: [{ url: "favicon.png", type: "image/png" }],
    shortcut: "favicon.png",
    apple: "favicon.png",
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
      className="scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col selection:bg-primary selection:text-black">
        {children}
      </body>
    </html>
  );
}
