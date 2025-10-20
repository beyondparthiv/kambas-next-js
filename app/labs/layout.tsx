
import type { ReactNode } from "react";
import TOC from "./TOC";

export default function LabsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container py-3">
      {/* Top horizontal pills nav */}
      <div className="mb-3">
        <TOC />
      </div>

      {/* Page content */}
      <main>{children}</main>
    </div>
  );
}




// import "./index.css";
// import TOC from "./TOC";

// export default function LabsLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div id="wd-labs-shell">
//       <aside id="wd-labs-toc">
//         <TOC />
//       </aside>
//       <main id="wd-labs-main">{children}</main>
//     </div>
//   );
// }
