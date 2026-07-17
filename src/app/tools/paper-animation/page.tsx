import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paper Animation | Tools",
  description: "A professional paper animation SaaS tool.",
};

export default function PaperAnimationPage() {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Paper Animation Tool</h1>
      <p className="text-lg text-secondary/60">Under development.</p>
    </div>
  );
}
