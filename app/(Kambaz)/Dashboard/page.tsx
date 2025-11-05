/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewCourse as addCourseAction,
  deleteCourse as deleteCourseAction,
  updateCourse as updateCourseAction,
} from "../reducer";
import { RootState } from "../store";

type Course = {
  _id: string;
  name: string;
  number?: string;
  description: string;
  image?: string;
  startDate?: string;
  endDate?: string;
};

export default function Dashboard() {
  // read from Redux
  const { courses } = useSelector((s: RootState) => s.coursesReducer);
  const dispatch = useDispatch();

  // local form state only
  const [course, setCourse] = useState<Course>({
    _id: "0",
    name: "New Course",
    description: "New Description",
  });

  // copy card into form to edit
  const startEdit = (c: any) => setCourse(c);

  return (
    <div id="wd-dashboard" className="p-3">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* New Course form (prof layout: title + buttons on same row) */}
      <section className="mb-4">
        <div className="d-flex align-items-center gap-2 mb-2">
          <h5 className="mb-0">New Course</h5>
          <button
            id="wd-update-course-click"
            className="btn btn-warning"
            onClick={() => dispatch(updateCourseAction(course))}
          >
            Update
          </button>
          <button
            id="wd-add-new-course-click"
            className="btn btn-primary"
            onClick={() => dispatch(addCourseAction(course))}
          >
            Add
          </button>
        </div>

        <input
          className="form-control mb-2"
          value={course.name}
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
          placeholder="Course name"
        />
        <textarea
          className="form-control"
          rows={3}
          value={course.description}
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
          placeholder="Course description"
        />
      </section>

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      {/* Cards */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {courses.map((c: any) => (
          <div key={c._id} className="col">
            <div className="card h-100">
              <Link href={`/Courses/${c._id}/Home`} className="text-decoration-none">
                <img
                  src={`/images/courses/${c.image ?? "reactjs.jpg"}`}
                  className="card-img-top"
                  alt={c.name}
                  style={{ height: "160px", objectFit: "cover" }}
                />
              </Link>

              <div className="card-body">
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

                {/* Go left, Edit/Delete right, with spacing */}
                <div className="d-flex justify-content-between align-items-center">
                  <Link href={`/Courses/${c._id}/Home`} className="btn btn-primary">
                    Go
                  </Link>
                  <div>
                    <button
                      id="wd-edit-course-click"
                      className="btn btn-warning me-2"
                      onClick={() => startEdit(c)}
                    >
                      Edit
                    </button>
                    <button
                      id="wd-delete-course-click"
                      className="btn btn-danger"
                      onClick={() => dispatch(deleteCourseAction(c._id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
