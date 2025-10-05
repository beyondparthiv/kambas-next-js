import Image from "next/image";
import Link from "next/link";

type Course = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
};

const courses: Course[] = [
  { id: "5610", title: "CS5610 Web Development", subtitle: "Full Stack Next.js", image: "/images/reactjs.png" },
  { id: "5520", title: "CS5520 Mobile App Dev", subtitle: "Android - Java", image: "/images/reactjs.png" },
  { id: "5008", title: "CS5008 Algorithm", subtitle: "Data Structures", image: "/images/reactjs.png" },
  { id: "5010", title: "CS5010 PDP", subtitle: "Program Design Paradigms", image: "/images/reactjs.png" },
  { id: "5800", title: "CS5800 Algorithms", subtitle: "Theory", image: "/images/reactjs.png" },
  { id: "5004", title: "CS5004 OOD", subtitle: "Java OOP", image: "/images/reactjs.png" },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 className="mb-3">Dashboard</h1>
      <hr />
      <h2 className="mt-3 mb-3">Published Courses ({courses.length})</h2>
      <div
        id="wd-dashboard-courses"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "16px",
        }}
      >
        {courses.map((c) => (
          <div
            key={c.id}
            className="card"
            style={{
              border: "1px solid #e5e5e5",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <div style={{ position: "relative", height: 140, background: "#f6f6f6" }}>
              <Image src={c.image} alt={c.title} fill style={{ objectFit: "contain" }} />
            </div>
            <div className="card-body" style={{ background: "#fff" }}>
              <h5 className="card-title m-0">{c.title}</h5>
              <p className="card-text text-muted mb-3">{c.subtitle}</p>
              <Link href={`/Courses/${c.id}`} className="btn btn-outline-danger btn-sm">
                Go to course
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
