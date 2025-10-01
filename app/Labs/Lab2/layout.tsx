import { ReactNode } from "react";
import TOC from "../TOC";    
import "./index.css";        

export const metadata = { title: "Lab 2" };

export default function Lab2Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <table id="wd-lab2-layout" width="100%">
      <tbody>
        <tr>
          <td valign="top" width="100px">
            <TOC />
          </td>
          <td valign="top">{children}</td>
        </tr>
      </tbody>
    </table>
  );
}
