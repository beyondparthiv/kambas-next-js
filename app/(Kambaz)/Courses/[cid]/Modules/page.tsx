"use client";

import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import { modules as db } from "../../../Database";

type Lesson = { _id: string; name: string; description?: string; module: string };
type CourseModule = {
  _id: string;
  name: string;
  description?: string;
  course: string;
  lessons?: Lesson[];
};

export default function Modules({ params }: { params: { cid: string } }) {
  const { cid } = params;

  // pull only the modules for this course id
  const courseModules = (db as CourseModule[]).filter((m) => m.course === cid);

  return (
    <div id="wd-modules">
      {/* Toolbar - left buttons + right red button */}
      <div id="wd-modules-toolbar" className="wd-toolbar">
        <div className="wd-toolbar-left">
          <a href="#" className="btn-grey">Collapse All</a>
          <a href="#" className="btn-grey">View Progress</a>

          <div id="wd-publish-all">
            <a href="#" className="btn-grey">
              <FaCheckCircle className="wd-ok" />
              <span>Publish All</span>
              <span className="wd-caret">▾</span>
            </a>
            <ul id="wd-publish-menu">
              <li><FaCheckCircle className="wd-ok" /> Publish all</li>
              <li>○ Publish all items and modules</li>
              <li>🚫 Unpublish all</li>
              <li>✖ Unpublish all modules</li>
            </ul>
          </div>
        </div>

        <a href="#" className="btn-red">
          <FaPlus style={{ marginRight: 6 }} />
          Module
        </a>
      </div>

      {/* Render each module with its lessons */}
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

          {(mod.lessons ?? []).map((lesson) => (
            <div key={lesson._id} className="wd-lesson">
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
