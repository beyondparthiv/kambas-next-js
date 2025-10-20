// app/page.tsx
import Link from "next/link";

export default function Landing() {
  return (
    <main id="wd-landing">
      <div id="wd-landing-content">
        <h1>Kambaz</h1>
        <p>This is the landing page. Use the link below to open the Kambaz UI.</p>
        <p><Link href="/Account/Signin" id="wd-open-kambaz">Open Kambaz</Link></p>
        <p><Link href="/labs" id="wd-open-labs">Open Labs</Link></p>
      </div>
    </main>
  );
}
