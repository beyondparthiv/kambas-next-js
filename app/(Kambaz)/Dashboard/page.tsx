"use client";

import { useState } from "react";
import Link from "next/link";
import * as db from "../Database";

type Course = {
  _id: string;
  name: string;
  number: string;
  description: string;
  image: string;
  startDate?: string;
  endDate?: string;
};

export default function Dashboard() {
  // 1) courses in state
  const [courses, setCourses] = useState<Course[]>(
    (db.courses as Course[]) ?? []
  );

  // 2) form state (used for Add and Edit)
  const [course, setCourse] = useState<Course>({
    _id: "0",
    name: "New Course",
    number: "NEW-0000",
    description: "New Description",
    image: "reactjs.jpg",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  // Add
  const addNewCourse = () => {
    const newCourse: Course = { ...course, _id: Date.now().toString() };
    setCourses([...courses, newCourse]);
  };

  // Edit (copy a course into the form)
  const startEdit = (c: Course) => setCourse(c);

  // Update the selected course
  const updateCourse = () => {
    setCourses((prev) =>
      prev.map((c) => (c._id === course._id ? { ...c, ...course } : c))
    );
  };

  // Delete by id
  const deleteCourse = (id: string) => {
    setCourses((prev) => prev.filter((c) => c._id !== id));
  };

  return (
    <div id="wd-dashboard" className="p-3">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* Form */}
      <section className="mb-4">
        <h5 className="mb-2">New Course</h5>

        <input
          className="form-control mb-2"
          value={course.name}
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
          placeholder="Course name"
        />

        <textarea
          className="form-control mb-2"
          rows={3}
          value={course.description}
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
          placeholder="Course description"
        />

        <div className="d-flex gap-2 mb-2">
          <input
            className="form-control"
            value={course.number}
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
            placeholder="Course number (e.g., CS5610)"
          />
          <input
            className="form-control"
            value={course.image}
            onChange={(e) => setCourse({ ...course, image: e.target.value })}
            placeholder="Image filename (e.g., reactjs.jpg)"
          />
        </div>

        <div className="d-flex gap-2">
          <button id="wd-update-course-click" className="btn btn-warning" onClick={updateCourse}>
            Update
          </button>
          <button id="wd-add-new-course-click" className="btn btn-primary" onClick={addNewCourse}>
            Add
          </button>
        </div>
      </section>

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      {/* Cards */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {courses.map((c) => (
          <div key={c._id} className="col">
            <div className="card h-100">
              {/* Make only the image clickable to the course page */}
              <Link href={`/Courses/${c._id}/Home`} className="text-decoration-none">
                <img
                  src={`/images/courses/${c.image}`}
                  className="card-img-top"
                  alt={c.name}
                  style={{ height: "160px", objectFit: "cover" }}
                />
              </Link>

              <div className="card-body">
                {/* Title links to course too */}
                <h6 className="fw-semibold mb-2">
                  <Link
                    href={`/Courses/${c._id}/Home`}
                    className="text-decoration-none"
                  >
                    {c.name}
                  </Link>
                </h6>

                <p
                  className="card-text overflow-hidden mb-3"
                  style={{
                    height: "84px",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {c.description}
                </p>

                {/* Footer buttons: Go | Edit | Delete */}
                <div className="d-flex gap-2">
                  <Link href={`/Courses/${c._id}/Home`} className="btn btn-primary">
                    Go
                  </Link>
                  <button
                    id="wd-edit-course-click"
                    className="btn btn-warning"
                    onClick={() => startEdit(c)}
                  >
                    Edit
                  </button>
                  <button
                    id="wd-delete-course-click"
                    className="btn btn-danger"
                    onClick={() => deleteCourse(c._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
