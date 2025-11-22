"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../Store/store";
import {
  addAssignment,
  updateAssignment,
  type Assignment,
} from "../reducer";
import React from "react";

export default function AssignmentEditor() {
  const { cid, aid } = useParams() as { cid: string; aid: string };
  const router = useRouter();
  const dispatch = useDispatch();

  const { assignments } = useSelector(
    (s: RootState) => s.assignments
  );

  const existing = assignments.find((x) => x._id === aid && x.course === cid);
  const isNew = aid === "new" || !existing;

  const [state, setState] = React.useState<Assignment>(() => {
    if (existing) return { ...existing };
    return {
      _id: "new",
      course: cid,
      title: "New Assignment",
      description: "",
      points: 100,
      dueDate: "",
      availableDate: "",
    };
  });

  const onSave = () => {
    if (isNew) {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        course: cid,
        title: state.title,
        description: state.description,
        points: state.points,
        dueDate: state.dueDate,
        availableDate: state.availableDate,
      };
      dispatch(addAssignment(newAssignment));
    } else {
      dispatch(updateAssignment(state));
    }
    router.push(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-editor" className="container-fluid p-0">
      <div className="row g-4">
        {/* LEFT */}
        <div className="col-12 col-lg-8">
          <label className="form-label fw-semibold">Assignment Name</label>
          <input
            className="form-control mb-3"
            value={state.title}
            onChange={(e) => setState({ ...state, title: e.target.value })}
          />

          <div className="card wd-desc-card mb-3">
            <div className="card-body p-3">
              <div className="text-danger fw-semibold mb-2">Description</div>
              <textarea
                className="form-control border-0 p-0"
                style={{ minHeight: 280, resize: "vertical" }}
                value={state.description ?? ""}
                onChange={(e) =>
                  setState({ ...state, description: e.target.value })
                }
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Points</label>
            <input
              className="form-control"
              type="number"
              value={String(state.points ?? 0)}
              onChange={(e) =>
                setState({ ...state, points: Number(e.target.value) || 0 })
              }
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-12 col-lg-4">
          <div className="card wd-editor-side">
            <div className="card-body">
              <div className="fw-semibold mb-2">Assign</div>

              <div className="mb-3">
                <div className="fw-semibold small mb-1">Assign to</div>
                <input className="form-control" defaultValue="Everyone" readOnly />
              </div>

              <div className="mb-3">
                <div className="fw-semibold small mb-1">Due Date</div>
                <input
                  type="date"
                  className="form-control"
                  value={state.dueDate || ""}
                  onChange={(e) => setState({ ...state, dueDate: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <div className="fw-semibold small mb-1">Available From</div>
                <input
                  type="date"
                  className="form-control"
                  value={state.availableDate || ""}
                  onChange={(e) =>
                    setState({ ...state, availableDate: e.target.value })
                  }
                />
              </div>

              <div className="d-flex gap-2 mt-4">
                <Link
                  href={`/Kambaz/Courses/${cid}/Assignments`}
                  className="btn btn-secondary w-50"
                >
                  Cancel
                </Link>
                <button onClick={onSave} className="btn btn-danger w-50">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}