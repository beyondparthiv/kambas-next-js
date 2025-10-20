"use client";

import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import { modules as db } from "../../../Database"; // ../../../ from [cid]/Modules/page.tsx

type Lesson = { name: string };
type CourseModule = { course: string; name: string; lessons: Lesson[] };

export default function Modules({ params }: { params: { cid: string } }) {
  const { cid } = params;

  const courseModules = (db as CourseModule[]).filter(m => m.course === cid);

  return (
    <div id="wd-modules">
      <h1>Course {cid}</h1>

      <div id="wd-modules-toolbar">
        <a href="#" className="btn-grey">Collapse All</a>
        <a href="#" className="btn-grey">View Progress</a>

        <div id="wd-publish-all">
          <a href="#" className="btn-grey">
            Publish All <FaCheckCircle className="wd-ok" />
            <span style={{ marginLeft: 4 }}>▼</span>
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

      {/* Render modules dynamically from Database */}
      {courseModules.map((mod, i) => (
        <div key={`${mod.name}-${i}`} className="wd-module">
          <div className="wd-module-title">
            <span>▤ {mod.name}</span>
            <div className="wd-actions">
              <FaCheckCircle className="wd-ok" />
              <FaPlus className="wd-plus" />
              <FaEllipsisV className="wd-kebab" />
            </div>
          </div>

          {(mod.lessons || []).map((lesson, j) => (
            <div key={`${mod.name}-lesson-${j}`} className="wd-lesson">
              <div className="d-flex align-items-center">
                <span className="wd-drag">▤</span>
                <span>{lesson.name}</span>
              </div>
              <div className="wd-actions">
                <FaCheckCircle className="wd-ok" />
                <FaEllipsisV className="wd-kebab" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
