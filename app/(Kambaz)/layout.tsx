// app/(Kambaz)/layout.tsx
import Navigation from "./Navigation";

export default function KanbasLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Navigation />
      <main style={{ flex: 1, padding: "24px" }}>{children}</main>
    </div>
  );
}
