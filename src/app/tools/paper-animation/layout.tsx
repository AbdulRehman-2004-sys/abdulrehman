import React from "react";

export default function PaperAnimationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="paper-animation-wrapper min-h-screen bg-background">
      <main className="container-custom">{children}</main>
    </div>
  );
}
