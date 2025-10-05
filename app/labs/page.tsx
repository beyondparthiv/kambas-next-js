import Link from "next/link";

export default function LabsLanding() {
  return (
    <main className="container py-4">
      <h1 className="mb-3">Labs - Chapter 2</h1>
      <p className="mb-1"><strong>Student:</strong> Parthiv Modi</p>
      <p className="mb-4"><strong>Section:</strong> CS5610 - Fall 2025</p>

      <h5>Labs</h5>
      <ul>
        <li><Link href="/labs/lab1">Lab 1 - HTML</Link></li>
        <li><Link href="/labs/lab2">Lab 2 - CSS and Bootstrap</Link></li>
        <li><Link href="/labs/lab3">Lab 3 - React Icons and Layouts</Link></li>
      </ul>

      <h5 className="mt-4">Kambaz</h5>
      <p><Link href="/Dashboard">Back to Kambaz Dashboard</Link></p>

      <h5 className="mt-4">Source Code Repositories</h5>
      <ul>
        <li><a href="https://github.com/beyondparthiv/kambas-next-js" target="_blank" rel="noreferrer">Kambaz - Next.js</a></li>
        <li><a href="https://github.com/beyondparthiv/labs" target="_blank" rel="noreferrer">Labs</a></li>
      </ul>
    </main>
  );
}
