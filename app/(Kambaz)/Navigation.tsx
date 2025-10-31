'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
} from 'react-icons/fa';

type NavItem = {
  label: string;
  path: string; // must match your route folder naming
  icon: React.ComponentType<{ className?: string }>;
};

export default function Navigation() {
  const pathname = (usePathname() || '').toLowerCase();

  // Use lowercase paths to match Next.js routes and make matching reliable.
  const links: NavItem[] = [
    { label: 'Dashboard', path: '/Dashboard', icon: FaTachometerAlt },
    // Per professor: Courses routes to the dashboard
    { label: 'Courses',   path: '/Dashboard', icon: FaBook },
    { label: 'Calendar',  path: '/Calendar',  icon: FaCalendarAlt },
    { label: 'Inbox',     path: '/Inbox',     icon: FaInbox },
    { label: 'Labs',      path: '/labs',      icon: FaFlask },

    // extras you had
    { label: 'Groups',    path: '/Groups',    icon: FaUsers },
    { label: 'History',   path: '/History',   icon: FaHistory },
    { label: 'Help',      path: '/Help',      icon: FaQuestionCircle },
  ];

  const isActive = (path: string) => {
    // startsWith keeps "Dashboard" active on subpages like /dashboard/...
    return pathname.startsWith(path);
  };

  return (
    <nav id="wd-kanbas-navigation">
      <ul>
        {/* NEU logo */}
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

        {/* Account (special item) */}
        <li className={`wd-item-required wd-item-account ${pathname.startsWith('/Account') ? 'wd-active' : ''}`}>
          <Link href="/Account" className="wd-nav-link" aria-current={pathname.startsWith('/Account') ? 'page' : undefined}>
            <FaUserCircle className="wd-icon" />
            <span>Account</span>
          </Link>
        </li>

        {/* Data-driven items */}
        {links.map(({ label, path, icon: Icon }) => (
          <li key={label} className={isActive(path) ? 'wd-active' : ''}>
            <Link href={path} className="wd-nav-link" aria-current={isActive(path) ? 'page' : undefined}>
              <Icon className="wd-icon" />
              <span className="wd-label">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
