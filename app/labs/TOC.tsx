"use client";

import { Nav, NavItem, NavLink } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = (usePathname() || "").toLowerCase();

  // helpers to mark active tab while keeping your exact hrefs unchanged
  const isActive = (end: string) => pathname.endsWith(end.toLowerCase());

  return (
    <Nav variant="pills" className="gap-3 mb-4">
      <NavItem>
        <NavLink
          as={Link}
          href="/labs"
          className={`nav-link ${isActive("/labs") ? "active" : ""}`}
        >
          Labs
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          as={Link}
          href="/labs/lab1"
          className={`nav-link ${isActive("/labs/lab1") ? "active" : ""}`}
        >
          Lab 1
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          as={Link}
          href="/labs/lab2"
          className={`nav-link ${isActive("/labs/lab2") ? "active" : ""}`}
        >
          Lab 2
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          as={Link}
          href="/labs/lab3"
          className={`nav-link ${isActive("/labs/lab3") ? "active" : ""}`}
        >
          Lab 3
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          as={Link}
          href="/labs/lab4"
          className={`nav-link ${isActive("/labs/lab4") ? "active" : ""}`}
        >
          Lab 4
        </NavLink>
      </NavItem>

      <NavItem>
        <Link href="/labs/lab5" className={`nav-link ${pathname==="/labs/lab5" ? "active" : ""}`}>
  Lab 5
</Link>

      </NavItem>

      <NavItem>
        <NavLink as={Link} href="/Dashboard">
          Kambaz
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink as={Link} href="https://github.com/beyondparthiv/kambas-next-js">
          My GitHub
        </NavLink>
      </NavItem>
    </Nav>
  );
}
