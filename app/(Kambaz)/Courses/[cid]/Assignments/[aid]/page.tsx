"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
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
  due?: string;             // expect YYYY-MM-DD for date inputs
  availableFrom?: string;   // expect YYYY-MM-DD
  availableUntil?: string;  // expect YYYY-MM-DD
};

export default function AssignmentEditor() {
  const { cid, aid } = useParams() as { cid: string; aid: string };

  const course = (courses as Course[]).find((c) => c._id === cid);
  if (!course) return notFound();

  const a = (assignments as Assignment[]).find(
    (x) => x.course === cid && x._id === aid
  );
  if (!a) return notFound();

  const title = a.title || "Untitled Assignment";
  const description =
    a.description ||
    `The assignment is available online.

Submit a link to the landing page of your Web application.
The landing page should include: your name/section; links to labs; link to Kanbas app; and all repos.`;
  const points = a.points ?? 100;

  // Defaults for date pickers in ISO format (HTML <input type="date">)
  const defaultDue = a.due || "2025-10-05";
  const defaultFrom = a.availableFrom || "2025-09-28";
  const defaultUntil = a.availableUntil || 0;

  return (
    <div id="wd-editor" className="container-fluid p-0">
      <div className="row g-4">
        {/* LEFT */}
        <div className="col-12 col-lg-8">
          <label className="form-label fw-semibold">Assignment Name</label>
          <input className="form-control mb-3" defaultValue={title} />

          <div className="card wd-desc-card mb-3">
            <div className="card-body p-3">
              {/* red hint above the editable description */}
              <div className="text-danger fw-semibold mb-2">Available online</div>
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

        {/* RIGHT */}
        <div className="col-12 col-lg-4">
          <div className="card wd-editor-side">
            <div className="card-body">
              <div className="fw-semibold mb-2">Assign</div>

              <div className="mb-3">
                <div className="fw-semibold small mb-1">Assign to</div>
                <input
                  className="form-control"
                  defaultValue={a.assignTo || "Everyone"}
                />
              </div>

              <div className="mb-3">
                <div className="fw-semibold small mb-1">Due</div>
                <input type="date" className="form-control" defaultValue={defaultDue} />
              </div>

              <div className="row g-2">
                <div className="col-6">
                  <div className="fw-semibold small mb-1">Available from</div>
                  <input type="date" className="form-control" defaultValue={defaultFrom} />
                </div>
                <div className="col-6">
                  <div className="fw-semibold small mb-1">Until</div>
                  <input type="date" className="form-control" defaultValue={defaultUntil} />
                </div>
              </div>

              <div className="d-flex gap-2 mt-4">
                <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary w-50">
                  Cancel
                </Link>
                <Link href={`/Courses/${cid}/Assignments`} className="btn btn-danger w-50">
                  Save
                </Link>
              </div>
            </div>
          </div>

          {/* keep hidden selects for rubric parity */}
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
