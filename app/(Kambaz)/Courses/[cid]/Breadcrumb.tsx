"use client";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ course }: { course: string }) {
  const pathname = usePathname();
  const page = pathname.split("/").pop();
  return <>{course} &gt; {page}</>;
}
