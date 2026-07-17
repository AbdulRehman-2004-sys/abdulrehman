import React from "react";

export default function PaperAnimationLoading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent" />
    </div>
  );
}
