import Link from "next/link";

type Course = {
  id: string;
  title: string;
  code: string;
  term: string;
  banner?: string; // optional banner color
};

const courses: Course[] = [
  { id: "5610", title: "CS5610 Web Development", code: "CS5610.11550.202410", term: "2024, Fall 2023 Semester Full Term", banner: "#1e64b7" },
  { id: "5520", title: "CS5520 Mobile App Dev",  code: "CS5520.19753.202410", term: "2024, Fall 2023 Semester Full Term", banner: "#1e64b7" },
  { id: "5004", title: "CS5004 OOD",              code: "CS5004.20040.202310", term: "2023, Fall 2022 Semester Full Term",  banner: "#d2d6db" },
  { id: "4175", title: "CS5610 4175 Web Dev",     code: "CS5610.41752.202340", term: "2023, Summer 1 2023 Semester Full Term", banner: "#d2d6db" },
  { id: "11550",title: "CS5610 11550 Web Dev",    code: "CS5610.11550.202410", term: "2024, Fall 2023 Semester Full Term", banner: "#1e64b7" },
  { id: "17387",title: "CS5610 17387 Web Dev",    code: "CS5610.17387.202410", term: "2024, Fall 2023 Semester Full Term", banner: "#1e64b7" },
  { id: "17367",title: "CS5610 17367 Web Dev",    code: "CS5610.17367.202410", term: "2024, Fall 2023 Semester Full Term", banner: "#1e64b7" },
  { id: "30086",title: "CS5450 30086 Web Dev",    code: "CS5450.30086.202330", term: "2023, Spring 2023 Semester Full Term", banner: "#d2d6db" },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (24)</h2>
      <hr />

      <div className="row g-4">
        {courses.map((c) => (
          <div key={c.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="wd-course-card">
              {/* Banner (blue/gray like Canvas) */}
              <div
                className="wd-card-banner"
                style={{ background: c.banner || "#1e64b7" }}
                aria-hidden="true"
              />
              {/* Body */}
              <div className="wd-card-body">
                <Link
                  href={`/Courses/${c.id}/Home`}
                  className="wd-course-title"
                >
                  {c.title}
                </Link>
                <div className="wd-course-meta">
                  {c.code}
                  <br />
                  {c.term}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
