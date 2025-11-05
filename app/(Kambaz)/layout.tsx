// app/(Kambaz)/layout.tsx
"use client";

import { ReactNode } from "react";
import Navigation from "./Navigation";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";

export default function KanbasLayout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <div id="wd-kanbas-shell">
        <Navigation />
        <main id="wd-kanbas-main">{children}</main>
      </div>
    </Provider>
  );
}
