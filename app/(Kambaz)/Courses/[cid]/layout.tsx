// app/(Kambaz)/Courses/[cid]/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // single CSS for shell + nav + pages

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
