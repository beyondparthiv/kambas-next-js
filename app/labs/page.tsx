// app/labs/page.tsx
import Link from "next/link";

export default function LabsLanding() {
  return (
    <main id="wd-labs-landing">
      <h1>Labs - Chapter 2</h1>
      <p><strong>Student:</strong> Parthiv Modi</p>
      <p><strong>Section:</strong> CS5610 - Fall 2025</p>

      <h3>Lab Links</h3>
      <ul>
        <li><Link href="/labs/lab1">Lab 1 - HTML</Link></li>
        <li><Link href="/labs/lab2">Lab 2 - CSS and Bootstrap</Link></li>
        <li><Link href="/labs/lab3">Lab 3 - Layouts and Icons</Link></li>
      </ul>

      <h3>Kambaz</h3>
      <p><Link href="/Dashboard">Back to Kambaz Dashboard</Link></p>

      <h3>Source Code Repositories</h3>
      <ul>
        <li><a href="https://github.com/beyondparthiv/kambas-next-js" target="_blank" rel="noreferrer">Kambaz - Next.js</a></li>
        <li><a href="https://github.com/beyondparthiv/labs" target="_blank" rel="noreferrer">Labs</a></li>
      </ul>
    </main>
  );
}
