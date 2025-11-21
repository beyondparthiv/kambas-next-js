// app/(Kambaz)/layout.tsx
"use client";
import "./index.css"; 
import { Provider } from "react-redux";
import { store } from "./Store/store";  // ← Note the { }
import SessionLoader from "./SessionLoader";
import Navigation from "./Navigation";

export default function KambazLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <SessionLoader />
      <div id="wd-kanbas-shell">
        <Navigation />
        <main id="wd-kanbas-main">
          {children}
        </main>
      </div>
    </Provider>
  );
}