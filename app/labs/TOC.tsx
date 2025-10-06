// app/labs/TOC.tsx
import Link from "next/link";

export default function TOC() {
  return (
    <nav className="wd-toc">
      <h4 className="wd-toc-title">Labs</h4>
      <ul className="wd-toc-list">
        <li><Link href="/labs">Overview</Link></li>
        <li><Link href="/labs/lab1">Lab 1 - HTML</Link></li>
        <li><Link href="/labs/lab2">Lab 2 - CSS &amp; Bootstrap</Link></li>
        <li><Link href="/labs/lab3">Lab 3 - Layouts &amp; Icons</Link></li>
      </ul>

      <div className="wd-toc-sep" />

      <ul className="wd-toc-list">
        <li><Link href="/Dashboard">Back to Kambaz</Link></li>
        <li><Link href="/Courses/5610/Home">Go to Course</Link></li>
      </ul>
    </nav>
  );
}
