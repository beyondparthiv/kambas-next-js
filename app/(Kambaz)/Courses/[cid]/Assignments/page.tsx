"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";
import { deleteAssignment } from "./reducer";

import {
  FaSearch,
  FaPlus,
  FaGripVertical,
  FaEllipsisV,
  FaCheckCircle,
  FaFolder,
  FaTrash,
} from "react-icons/fa";

export default function AssignmentsPage() {
  const { cid } = useParams() as { cid: string };
  const dispatch = useDispatch();
  const { assignments } = useSelector(
    (s: RootState) => s.assignmentsReducer
  );

  const [q, setQ] = useState("");

  const items = useMemo(
    () =>
      assignments
        .filter((a) => a.course === cid)
        .filter((a) => a.title.toLowerCase().includes(q.toLowerCase())),
    [assignments, cid, q]
  );

  const shortTitle = (full: string) => full.split(" - ")[0] || full;

  return (
    <div id="wd-assignments">
      {/* Toolbar: search + buttons */}
      <div className="wd-assignments-toolbar">
        <div className="wd-search">
        <FaSearch className="wd-mag" />
        <input
          type="text"
          className="form-control"
          placeholder="Search for Assignment"
          // IMPORTANT: no `value` prop here; use uncontrolled input
          onChange={(e) => {
            /* optional: store e.target.value in local state if you filter list */
          }}
          suppressHydrationWarning
        />
      </div>

        <div className="wd-cta">
          <button className="btn-grey w-100">
            <FaPlus className="me-2" /> Group
          </button>
          <Link
            href={`/Courses/${cid}/Assignments/new`}
            className="btn-red w-100"
          >
            <FaPlus className="me-2" />
            Assignment
          </Link>
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
          {items.map((a) => (
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
                    <span className="fw-semibold">Due</span> {a.due || "—"}
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <FaCheckCircle className="wd-ok" />

                {/* Delete with confirm */}
                <FaTrash
                  className="text-danger"
                  role="button"
                  onClick={() => {
                    if (confirm("Remove this assignment?")) {
                      dispatch(deleteAssignment(a._id));
                    }
                  }}
                  title="Delete"
                />
                <FaEllipsisV className="wd-kebab" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
