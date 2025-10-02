import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata = { title: "Labs" };

export default function LabsLayout({ children }: { children: ReactNode }) {
  return (
    <table id="wd-labs-layout" width="100%">
      <tbody>
        <tr>
          <td valign="top" width="140">
            <ul id="wd-toc">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/labs/lab1">Lab 1</Link></li>
              <li><Link href="/labs/lab2">Lab 2</Link></li>
              <li><Link href="/labs/lab3">Lab 3</Link></li>
              <li><Link href="/kambaz">Kambaz</Link></li>
            </ul>
          </td>

          {/* Wrap ALL lab pages (including Lab-2) in a Bootstrap container with thin padding */}
          <td valign="top">
            <div id="wd-lab-container" className="container p-2">
              {children}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
