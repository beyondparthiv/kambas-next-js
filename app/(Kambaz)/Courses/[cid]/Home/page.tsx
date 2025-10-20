"use client";

import { useParams } from "next/navigation";
import { modules, assignments } from "../../../Database";

type Lesson = { _id: string; name: string };
type Module = { _id: string; course: string; name: string; lessons?: Lesson[] };
type Assignment = { _id: string; course: string; title: string };

export default function Home() {
  const { cid } = useParams() as { cid: string };

  // Data for this course
  const courseModules = (modules as unknown as Module[]).filter(
    (m) => m.course === cid
  );
  const courseAssignmentsCount = (assignments as unknown as Assignment[]).filter(
    (a) => a.course === cid
  ).length;

  // Total lessons across modules (for a nicer status)
  const totalLessons = courseModules.reduce(
    (sum, m) => sum + (m.lessons?.length ?? 0),
    0
  );

  return (
    <div id="wd-home">
      <h1>Home</h1>

      <div id="wd-home-grid">
        <section id="wd-home-modules">
          <h4>Modules</h4>

          {courseModules.map((mod) => (
            <div key={mod._id} className="wd-module">
              <div className="wd-module-title">
                <span>{mod.name}</span>
                <span>⋮</span>
              </div>

              {(mod.lessons ?? []).map((les) => (
                <div key={les._id} className="wd-lesson">
                  {les.name}
                </div>
              ))}
            </div>
          ))}

          {/* fallback if a course has no modules yet */}
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
        

        <aside id="wd-home-status">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title m-0">Course Status</h5>
              <ul className="mt-2 mb-0">
                <li>Published</li>
                <li>Modules: {courseModules.length}</li>
                <li>Lessons: {totalLessons}</li>
                <li>Assignments: {courseAssignmentsCount}</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
