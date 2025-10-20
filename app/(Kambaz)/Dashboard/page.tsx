import Link from "next/link";
import { courses } from "../Database";

type Course = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
  author?: string;
};

export default function Dashboard() {
  const list = courses as Course[];

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({list.length})</h2>
      <hr />

      <div className="row g-4">
        {list.map((c) => (
          <div key={c._id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="wd-course-card">
              <div
                className="wd-card-banner"
                style={{ background: ["D123"].includes(c.department) ? "#1e64b7" : "#d2d6db" }}
                aria-hidden="true"
              />
              <div className="wd-card-body">
                <Link href={`/Courses/${c._id}/Home`} as={`/Courses/${c._id}/Home`} className="wd-course-title">

                  {c.name}
                </Link>
                <div className="wd-course-meta">
                  {c.number}
                  <br />
                  {c.startDate} – {c.endDate}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
