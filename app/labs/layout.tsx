// app/labs/layout.tsx
import "./index.css";
import TOC from "./TOC";

export default function LabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="wd-labs-shell">
      <aside id="wd-labs-toc">
        <TOC />
      </aside>
      <main id="wd-labs-main">{children}</main>
    </div>
  );
}
