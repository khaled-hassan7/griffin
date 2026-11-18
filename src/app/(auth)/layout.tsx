import type { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <main className="w-full max-w-md">{children}</main>
    </div>
  );
}

export default layout;
