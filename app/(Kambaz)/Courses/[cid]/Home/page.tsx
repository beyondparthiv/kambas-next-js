"use client";

import { useParams } from "next/navigation";
import {
  modules,
  assignments,
  courses as dbCourses,
} from "../../../Database";
import CourseStatus from "./Status";
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";

type Lesson = { _id: string; name: string };
type Module = { _id: string; course: string; name: string; lessons?: Lesson[] };
type Assign = { _id: string; course: string; title: string };
type Course = { _id: string; name: string; number: string };

export default function Home() {
  const { cid } = useParams() as { cid: string };

  const courseModules = (modules as unknown as Module[]).filter(
    (m) => m.course === cid
  );
  const totalLessons = courseModules.reduce(
    (sum, m) => sum + (m.lessons?.length ?? 0),
    0
  );
  const assignCount = (assignments as unknown as Assign[]).filter(
    (a) => a.course === cid
  ).length;

  const course = (dbCourses as unknown as Course[]).find((c) => c._id === cid);

  return (
    <div id="wd-home">
      

      <div id="wd-home-grid">
        {/* LEFT: modules list, with the same toolbar as on Modules */}
        <section id="wd-home-modules">
          {/* toolbar */}
          <div id="wd-modules-toolbar">
            <a href="#" className="btn-grey">Collapse All</a>
            <a href="#" className="btn-grey">View Progress</a>

            <div id="wd-publish-all">
              <a href="#" className="btn-grey">
                Publish All <FaCheckCircle className="wd-ok" />
                <span className="wd-caret">▼</span>
              </a>
              <ul id="wd-publish-menu">
                <li><FaCheckCircle className="wd-ok" /> Publish all</li>
                <li>○ Publish all items and modules</li>
                <li>🚫 Unpublish all</li>
                <li>✖ Unpublish all modules</li>
              </ul>
            </div>

            <a href="#" className="btn-red">+ Module</a>
          </div>

          {/* modules from DB */}
          {courseModules.map((mod) => (
            <div key={mod._id} className="wd-module">
              <div className="wd-module-title">
                <span>▤ {mod.name}</span>
                <div className="wd-actions">
                  <FaCheckCircle className="wd-ok" />
                  <FaPlus className="wd-plus" />
                  <FaEllipsisV className="wd-kebab" />
                </div>
              </div>

              {(mod.lessons ?? []).map((les) => (
                <div key={les._id} className="wd-lesson">
                  <div className="d-flex align-items-center">
                    <span className="wd-drag">▤</span>
                    <span>{les.name}</span>
                  </div>
                  <div className="wd-actions">
                    <FaCheckCircle className="wd-ok" />
                    <FaEllipsisV className="wd-kebab" />
                  </div>
                </div>
              ))}
            </div>
          ))}

          {courseModules.length === 0 && (
            <div className="wd-module">
              <div className="wd-module-title">
                <span>Getting Started</span>
                <span>⋮</span>
              </div>
              <div className="wd-lesson">No modules published yet.</div>
            </div>
          )}
        </section>

        {/* RIGHT: Canvas-style status panel with icons */}
        <aside id="wd-home-status">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title m-0">Course Status</h5>

              {/* Publish / Unpublish buttons */}
              <div id="wd-course-status-actions">
                <button className="wd-unpublish-btn">✖ Unpublish</button>
                <button className="wd-publish-btn">✔ Publish</button>
              </div>

              <div className="status-actions">
                <button>Import Existing Content</button>
                <button>Import from Commons</button>
                <button>Choose Home Page</button>
                <button>View Course Stream</button>
                <button>New Announcement</button>
                <button>New Analytics</button>
                <button>View Course Notifications</button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
