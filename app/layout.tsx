
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kambaz",
  description: "Canvas-like UI for CS5610 labs and assignments",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

