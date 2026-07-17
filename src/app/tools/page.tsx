import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools & SaaS | Abdul Rehman",
  description: "Explore the tools and SaaS platforms built by Abdul Rehman.",
};

export default function ToolsListingPage() {
  return (
    <div className="container-custom py-20 min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold tracking-tight mb-4">SaaS Tools</h1>
      <p className="text-lg text-secondary/60">Coming soon.</p>
    </div>
  );
}
