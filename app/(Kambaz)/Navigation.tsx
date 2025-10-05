"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser, FaTachometerAlt, FaBook, FaCalendar, FaInbox, FaFlask, FaExternalLinkAlt } from "react-icons/fa";

const links = [
  { href: "/", label: "Northeastern", external: true, icon: <FaExternalLinkAlt />, extUrl: "https://www.northeastern.edu" },
  { href: "/Account", label: "Account", icon: <FaUser /> },
  { href: "/Dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
  { href: "/Courses", label: "Courses", icon: <FaBook /> },
  { href: "/Calendar", label: "Calendar", icon: <FaCalendar /> },
  { href: "/Inbox", label: "Inbox", icon: <FaInbox /> },
  { href: "/labs", label: "Labs", icon: <FaFlask /> },
];

export default function Navigation() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href !== "/"
      ? pathname === href || pathname.startsWith(href + "/")
      : false;

  return (
    <nav id="wd-kanbas-navigation" style={{ width: 110, background: "#000", color: "#fff", minHeight: "100vh" }}>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {links.map((l) => {
          if (l.external) {
            return (
              <li key={l.label}>
                <a
                  href={l.extUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center",
                    padding: "18px 8px", color: "#fff", textDecoration: "none",
                  }}
                >
                  <span style={{ fontSize: 22 }}>{l.icon}</span>
                  <span style={{ marginTop: 6 }}>{l.label}</span>
                </a>
              </li>
            );
          }
          const active = isActive(l.href);
          return (
            <li key={l.label} style={{ background: active ? "#fff" : "#000" }}>
              <Link
                href={l.href}
                style={{
                  display: "flex", flexDirection: "column", alignItems: "center",
                  padding: "18px 8px",
                  color: active ? "#c00" : "#fff",
                  textDecoration: "none",
                }}
              >
                <span style={{ fontSize: 22, color: active ? "#c00" : "#c00" }}>{l.icon}</span>
                <span style={{ marginTop: 6 }}>{l.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
