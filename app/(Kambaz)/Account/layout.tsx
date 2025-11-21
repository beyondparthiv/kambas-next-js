// app/(Kambaz)/Account/layout.tsx

import "../Account/index.css";
import AccountNavigation from "./Navigation";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="wd-account-shell">
      {/* Account Navigation Sidebar */}
      <AccountNavigation />
      
      {/* Account Content */}
      <main id="wd-account-main" className="wd-auth">
        {children}
      </main>
    </div>
  );
}