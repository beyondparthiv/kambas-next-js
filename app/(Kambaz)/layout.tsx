// app/(Kambaz)/layout.tsx
import "./index.css";
import Navigation from "./Navigation";

export default function KanbasLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="wd-kanbas-shell">
      <Navigation />
      <main id="wd-kanbas-main">
        {children}
      </main>
    </div>
  );
}
