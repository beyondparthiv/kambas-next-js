// app/(Kambaz)/Courses/[cid]/Modules/page.tsx
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import { modules as db } from "../../../Database";

type Lesson = { _id?: string; name: string };
type CourseModule = { course: string; name: string; lessons?: Lesson[] };

export default async function Modules({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  const courseModules = (db as CourseModule[]).filter((m) => m.course === cid);

  return (
    <div id="wd-modules">
      

      <div id="wd-modules-toolbar" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <a href="#" className="btn-grey">Collapse All</a>
        <a href="#" className="btn-grey">View Progress</a>

        <div id="wd-publish-all" style={{ position: "relative", display: "inline-block" }}>
          <a href="#" className="btn-grey" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
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
