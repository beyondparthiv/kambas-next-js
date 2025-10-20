"use client";

import Link from "next/link";
import { FaPlus, FaSearch } from "react-icons/fa";
import { assignments as db } from "../../../Database";

type Assignment = {
  _id: string;
  course: string;
  title: string;
  points: number;
  due: string; // ISO
};

export default function Assignments({ params }: { params: { cid: string } }) {
  const { cid } = params;
  const items = (db as Assignment[]).filter(a => a.course === cid);

  const fmt = (iso?: string) =>
    iso ? new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric" }) : "";

  return (
    <div id="wd-assignments">
      <h1 className="mb-3">Assignments</h1>

      <div className="wd-assignments-toolbar mb-2">
        <div className="wd-search">
          <FaSearch className="wd-mag" />
          <input className="form-control" placeholder="Search for Assignment" />
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-secondary">
            <FaPlus className="me-1" /> Group
          </button>
          {/* goes to editor create page – can keep as-is or route wherever your rubric expects */}
          <Link href={`/Courses/${cid}/Assignments/A1`} className="btn btn-danger">
            <FaPlus className="me-1" /> Assignment
          </Link>
        </div>
      </div>

      <div className="wd-assign-list">
        {items.map((a) => (
          <div key={a._id} className="wd-assign-item">
            <Link
              href={`/Courses/${cid}/Assignments/${a._id}`}
              className="wd-assign-title fw-semibold"
            >
              {a.title}
            </Link>
            <div className="text-muted small">
              Due {fmt(a.due)} at 11:59pm | {a.points} pts
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
