"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarNav({
  links,
}: {
  links: { label: string; path: string }[];
}) {
  const pathname = (usePathname() || "").toLowerCase();
  const isActive = (p: string) => pathname.startsWith(p.toLowerCase());

  return (
    <aside id="wd-course-navigation" aria-label="Course navigation">
      <h4>Course</h4>
      <ul>
        {links.map((l) => (
          <li key={l.path} className={isActive(l.path) ? "wd-active" : ""}>
            <Link href={l.path}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
