// app/(Kambaz)/Courses/page.tsx
import { redirect } from "next/navigation";
export default function CoursesLanding() {
  redirect("/Courses/5610/Home");
  return null;
}
