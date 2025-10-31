"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarNav({ links }: { links: { label: string, path: string }[] }) {
  const pathname = usePathname().toLowerCase();

  const isActive = (path: string) => pathname.startsWith(path.toLowerCase());

  return (
    <aside id="wd-course-navigation">
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
