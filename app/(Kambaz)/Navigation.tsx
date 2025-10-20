"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaUserCircle,
  FaTachometerAlt,
  FaBook,
  FaCalendarAlt,
  FaInbox,
  FaFlask,
  FaUsers,
  FaHistory,
  FaQuestionCircle,
} from "react-icons/fa";

type NavItem = {
  label: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  // optional: treat as "active" when pathname includes this substring
  activeWhen?: string | ((pathname: string) => boolean);
};

export default function Navigation() {
  const pathname = usePathname() || "";

  // Data-driven links (rubric)
  const links: NavItem[] = [
    { label: "Dashboard", path: "/Dashboard", icon: FaTachometerAlt, activeWhen: "/dashboard" },
    // Per professor: Courses goes to Dashboard
    { label: "Courses", path: "/Dashboard", icon: FaBook, activeWhen: "/dashboard" },
    { label: "Calendar", path: "/Calendar", icon: FaCalendarAlt, activeWhen: "/calendar" },
    { label: "Inbox", path: "/Inbox", icon: FaInbox, activeWhen: "/inbox" },
    { label: "Labs", path: "/labs", icon: FaFlask, activeWhen: "/labs" },

    // --- extra items you had (not required by rubric) ---
    { label: "Groups", path: "/Groups", icon: FaUsers, activeWhen: "/groups" },
    { label: "History", path: "/History", icon: FaHistory, activeWhen: "/history" },
    { label: "Help", path: "/Help", icon: FaQuestionCircle, activeWhen: "/help" },
  ];

  const isActive = (item: NavItem) => {
    const rule = item.activeWhen;
    if (!rule) return pathname.toLowerCase() === item.path.toLowerCase();
    if (typeof rule === "string") return pathname.toLowerCase().includes(rule);
    return rule(pathname.toLowerCase());
  };

  return (
    <nav id="wd-kanbas-navigation">
      <ul>
        {/* Northeastern logo (required) */}
        <li id="wd-nav-neu">
          <a
            href="https://www.northeastern.edu"
            target="_blank"
            rel="noreferrer"
            className="wd-nav-link wd-link-neu"
            aria-label="Northeastern University"
          >
            <Image
              src="/images/northeastern.webp"
              alt="Northeastern University"
              width={60}
              height={60}
            />
          </a>
        </li>

        {/* REQUIRED BY RUBRIC: Account link */}
        <li className="wd-item-required wd-item-account">
          <Link href="/Account" className={`wd-nav-link ${pathname.startsWith("/Account") ? "wd-active" : ""}`}>
            <FaUserCircle className="wd-icon" />
            <span>Account</span>
          </Link>
        </li>

        {/* Data-driven items */}
        {links.map((link) => {
          const Icon = link.icon;
          const active = isActive(link);
          return (
            <li key={link.label} className={active ? "wd-active" : ""}>
              <Link href={link.path} className="wd-nav-link">
                <Icon className="wd-icon" />
                <span className="wd-label">{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
