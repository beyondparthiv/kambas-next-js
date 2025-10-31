"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { courses, assignments } from "../../../../Database";

type Course = { _id: string; name: string; number?: string };
type Assignment = {
  _id: string;
  course: string;
  title: string;
  description?: string;
  points?: number;
  group?: string;
  gradeAs?: string;
  submission?: string;
  assignTo?: string;
  due?: string;
  availableFrom?: string;
  availableUntil?: string;
};

/* --- helpers for datetime-local default values --- */
const pad = (n: number) => n.toString().padStart(2, "0");
function toLocalInputValue(src?: string | Date) {
  if (!src) return "";
  const d = src instanceof Date ? src : new Date(src);
  if (isNaN(d.getTime())) return "";
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}`;
}
function defaultDates() {
  const now = new Date();

  // Available from -> today at 00:00
  const avail = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);

  // Due -> next Friday at 23:59
  const due = new Date(now);
  const day = due.getDay();              // 0..6
  const toFriday = (5 - day + 7) % 7 || 7;
  due.setDate(due.getDate() + toFriday);
  due.setHours(23, 59, 0, 0);

  return { availStr: toLocalInputValue(avail), dueStr: toLocalInputValue(due) };
}

export default function AssignmentEditor() {
  // Per rubric: parse ids from URL with useParams()
  const { cid, aid } = useParams() as { cid: string; aid: string };

  const course = (courses as Course[]).find((c) => c._id === cid);
  if (!course) return notFound();

  const a = (assignments as Assignment[]).find(
    (x) => x.course === cid && x._id === aid
  );
  if (!a) return notFound();

  // defaults so UI always renders
  const title = a.title || "Untitled Assignment";
  const description =
    a.description ||
    `The assignment is available online.

Submit a link to the landing page of your Web application.
The landing page should include: your name/section; links to labs; link to Kanbas app; and all repos.`;
  const points = a.points ?? 100;

  // default values for the two pickers (keep "Until" as a plain input)
  const { availStr, dueStr } = defaultDates();
  const dueValue = toLocalInputValue(a.due) || dueStr;
  const availableFromValue = toLocalInputValue(a.availableFrom) || availStr;

  return (
    <div id="wd-editor" className="container-fluid p-0">
      {/* same structure as your current page */}
      <div className="row g-4">
        {/* LEFT COLUMN */}
        <div className="col-12 col-lg-8">
          <label className="form-label fw-semibold">Assignment Name</label>
          <input className="form-control mb-3" defaultValue={title} />

          {/* description card */}
          <div className="card wd-desc-card mb-3">
            <div className="card-body p-3">
              {/* red 'available online' line — outside the textarea so it can be colored */}
              <p className="mb-2">
                The assignment is <span className="text-danger">available online</span>
              </p>

              <textarea
                className="form-control border-0 p-0"
                style={{ minHeight: 280, resize: "vertical" }}
                defaultValue={description}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Points</label>
            <input className="form-control" defaultValue={String(points)} />
          </div>
        </div>

        {/* RIGHT COLUMN - ASSIGN PANEL */}
        <div className="col-12 col-lg-4">
          <div className="card wd-editor-side">
            <div className="card-body">
              <div className="fw-semibold mb-2">Assign</div>

              <div className="mb-3">
                <div className="fw-semibold small mb-1">Assign to</div>
                <input className="form-control" defaultValue={a.assignTo || "Everyone"} />
              </div>

              <div className="mb-3">
                <div className="fw-semibold small mb-1">Due</div>
                <input
                  type="datetime-local"
                  className="form-control"
                  defaultValue={dueValue}
                />
              </div>

              <div className="row g-2">
                <div className="col-6">
                  <div className="fw-semibold small mb-1">Available from</div>
                  <input
                    type="datetime-local"
                    className="form-control"
                    defaultValue={availableFromValue}
                  />
                </div>
                <div className="col-6">
                  <div className="fw-semibold small mb-1">Until</div>
                  <input 
                  type="datetime-local"
                  className="form-control" defaultValue={a.availableUntil || ""} />
                </div>
              </div>

              <div className="d-flex gap-2 mt-4">
                {/* per rubric: both navigate back to Assignments */}
                <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary w-50">
                  Cancel
                </Link>
                <Link href={`/Courses/${cid}/Assignments`} className="btn btn-danger w-50">
                  Save
                </Link>
              </div>
            </div>
          </div>

          {/* Keep the rest of the controls from earlier chapters if needed */}
          <div className="visually-hidden">
            <select defaultValue={a.group || "ASSIGNMENTS"} />
            <select defaultValue={a.gradeAs || "percentage"} />
            <select defaultValue={a.submission || "online"} />
          </div>
        </div>
      </div>
    </div>
  );
}
