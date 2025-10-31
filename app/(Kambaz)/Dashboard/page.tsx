"use client";
import Link from "next/link";
import * as db from "../Database";

export default function Dashboard() {
  const courses = db.courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {courses.map((course) => (
          <div key={course._id} className="col">
            <div className="card h-100">
              <Link
                href={`/Courses/${course._id}/Home`}
                className="text-decoration-none text-dark"
              >
                <img
                  src={`/images/courses/${course.image}`}
                  className="card-img-top"
                  alt={course.name}
                  style={{ height: "160px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5 className="card-title text-nowrap overflow-hidden">
                    {course.name}
                  </h5>
                  <p
                    className="card-text overflow-hidden"
                    style={{
                      height: "100px",
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {course.description}
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
