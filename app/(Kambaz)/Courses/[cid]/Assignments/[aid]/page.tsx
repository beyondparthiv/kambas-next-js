"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, assignments } from "../../../../Database";


/** ---- Types (no `any`) ---- */
type Course = {
  _id: string;
  name: string;
  number?: string;
  [k: string]: unknown;
};

type Assignment = {
  _id: string;             // assignment id (aid)
  course: string;          // course id (cid) this assignment belongs to
  title: string;
  description?: string;
  points?: number;
  group?: string;          // e.g., "ASSIGNMENTS"
  gradeAs?: string;        // e.g., "percentage"
  submission?: string;     // e.g., "online"
  assignTo?: string;       // e.g., "everyone"
  due?: string;            // e.g., "10/05/2025"
  availableFrom?: string;  // e.g., "09/28/2025"
  availableUntil?: string; // e.g., "10/06/2025"
};

export default function AssignmentEditor({
  params,
}: {
  params: { cid: string; aid: string };
}) {
  const { cid, aid } = params;

  // look up current course
  const courseList = courses as Course[];
  const course = courseList.find((c) => c._id === cid);
  if (!course) return notFound();

  // look up current assignment for this course
  const allAssignments = assignments as Assignment[];
  const assignment = allAssignments.find(
    (a) => a.course === cid && a._id === aid
  );
  if (!assignment) return notFound();

  // sensible fallbacks so the editor always renders
  const {
    title = "Untitled Assignment",
    description = "The assignment is available online.",
    points = 100,
    group = "ASSIGNMENTS",
    gradeAs = "percentage",
    submission = "online",
    assignTo = "everyone",
    due = "",
    availableFrom = "",
    availableUntil = "",
  } = assignment;

  return (
    // NOTE: we only render the inner editor. The course layout supplies
    // the outer shell and left nav. IDs/classes match your CSS exactly.
    <div id="wd-editor" className="container-fluid p-0">
      <h1>Assignment Editor</h1>

      {/* breadcrumb text (rubric wants Course > Assignments > A?) */}
      <div className="text-muted mb-3">
        {course.name} › Assignments › {title}
      </div>

      <div className="mb-3">
        <label className="form-label">Assignment Name</label>
        <input className="form-control" defaultValue={title} />
      </div>

      <div className="mb-4">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          rows={4}
          defaultValue={description}
        />
      </div>

      <div className="row g-3">
        <div className="col-md-4">
          <label className="form-label">Points</label>
          <input className="form-control" defaultValue={points} />
        </div>

        <div className="col-md-4">
          <label className="form-label">Assignment Group</label>
          <select className="form-control" defaultValue={group.toLowerCase()}>
            <option value="assignments">ASSIGNMENTS</option>
            <option value="labs">LABS</option>
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">Display Grade as</label>
          <select className="form-control" defaultValue={gradeAs}>
            <option value="percentage">Percentage</option>
            <option value="points">Points</option>
            <option value="complete_incomplete">Complete / Incomplete</option>
            <option value="letter">Letter Grade</option>
          </select>
        </div>
      </div>

      <div className="row g-3 mt-2">
        <div className="col-md-6">
          <label className="form-label">Submission Type</label>
          <select className="form-control" defaultValue={submission}>
            <option value="online">Online</option>
            <option value="onpaper">On Paper</option>
            <option value="external">External Tool</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Assign</label>
          <select className="form-control" defaultValue={assignTo}>
            <option value="everyone">Everyone</option>
            <option value="section1">Section 1</option>
          </select>
        </div>
      </div>

      <div className="row g-3 mt-2">
        <div className="col-md-4">
          <label className="form-label">Due</label>
          <input className="form-control" defaultValue={due} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Available from</label>
          <input className="form-control" defaultValue={availableFrom} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Until</label>
          <input className="form-control" defaultValue={availableUntil} />
        </div>
      </div>

      <div className="mt-4 d-flex gap-2">
        {/* back to assignments list for this course */}
        <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary">
          Cancel
        </Link>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
