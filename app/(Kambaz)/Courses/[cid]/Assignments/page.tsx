"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  FaSearch,
  FaPlus,
  FaGripVertical,
  FaEllipsisV,
  FaCheckCircle,
  FaFolder
} from "react-icons/fa";
import { assignments as db } from "../../../Database";

type Assignment = {
  _id: string;
  course: string;           // cid
  title: string;            // e.g., "A1 - ENV + HTML"
  points?: number;
  availableFrom?: string;   // e.g., "May 6 at 12:00am"
  due?: string;             // e.g., "May 13 at 11:59pm"
};

export default function AssignmentsPage() {
  const { cid } = useParams() as { cid: string };

  // Filter this course's assignments
  const items = (db as Assignment[]).filter(a => a.course === cid);

  // Helper to show “A1”, “A2”, … from your titles
  const shortTitle = (full: string) => full.split(" - ")[0] || full;

  return (
    <div id="wd-assignments">
     

      {/* Toolbar: search + equal buttons beside it */}
      <div className="wd-assignments-toolbar">
        <div className="wd-search">
          <FaSearch className="wd-mag" />
          <input
            type="text"
            className="form-control"
            placeholder="Search…"
            aria-label="Search assignments"
          />
        </div>

        <div className="wd-cta">
          <a className="btn-grey w-100"><FaPlus className="me-2" />Group</a>
          <a className="btn-red  w-100"><FaPlus className="me-2" />Assignment</a>
        </div>
      </div>


      {/* Group container (Canvas-style) */}
      <div className="wd-assignments-box">
        <div className="wd-assignments-header">
          <div className="d-flex align-items-center gap-2">
            <span className="wd-drag">▤</span>
            <span className="fw-semibold">ASSIGNMENTS</span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <span className="wd-badge-pill">40% of Total</span>
            <FaPlus className="wd-plus" />
            <FaEllipsisV className="wd-kebab" />
          </div>
        </div>

        {/* Assignment rows */}
        <div className="wd-assign-list">
          {items.map(a => (
            <div key={a._id} className="wd-assign-item">
              <div className="d-flex align-items-start gap-3">
                <FaGripVertical className="wd-drag mt-1" />
                <FaFolder className="mt-1" />
                <div>
                  <Link
                    href={`/Courses/${cid}/Assignments/${a._id}`}
                    className="wd-assign-title"
                  >
                    {shortTitle(a.title)}
                  </Link>
                  <div className="text-muted small">
                    <span className="text-danger">Multiple Modules</span>
                    <span className="mx-2">|</span>
                    <span>
                      <span className="fw-semibold">Not available until</span>{" "}
                      {a.availableFrom || "—"}
                    </span>
                    <span className="mx-2">|</span>
                    <span>{a.points ?? 100} pts</span>
                  </div>
                  <div className="text-muted small">
                    <span className="fw-semibold">Due</span>{" "}
                    {a.due || "—"}
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <FaCheckCircle className="wd-ok" />
                <FaEllipsisV className="wd-kebab" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
