// app/(Kambaz)/Courses/[cid]/Assignments/page.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import type { RootState, AppDispatch } from "../../../Store/store";
import { setAssignments, addAssignment as addAssignmentAction, deleteAssignment as deleteAssignmentAction, updateAssignment as updateAssignmentAction } from "./reducer";

const API_BASE = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

export default function AssignmentsPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params?.cid as string;
  const dispatch = useDispatch<AppDispatch>();

  const assignments = useSelector((s: RootState) => s.assignmentsReducer.assignments);

  const [assignment, setAssignment] = useState({
    _id: "",
    title: "New Assignment",
    course: courseId,
  });

  // Fetch assignments on mount
  useEffect(() => {
    if (courseId) {
      fetchAssignments();
    }
  }, [courseId]);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get(
        `${API_BASE}/api/courses/${courseId}/assignments`
      );
      console.log("✅ Fetched assignments:", response.data);
      dispatch(setAssignments(response.data));
    } catch (error: any) {
      console.error("⚠️ Backend not available");
    }
  };

  const addAssignment = async () => {
    try {
      const response = await axios.post(
        `${API_BASE}/api/courses/${courseId}/assignments`,
        { title: assignment.title }
      );
      console.log("✅ Assignment created:", response.data);
      await fetchAssignments();
      
      setAssignment({
        _id: "",
        title: "New Assignment",
        course: courseId,
      });
      
      alert("Assignment created!");
    } catch (error: any) {
      console.error("⚠️ Using Redux fallback");
      
      const newAssignment = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        course: courseId,
      };
      
      dispatch(addAssignmentAction(newAssignment));
      
      setAssignment({
        _id: "",
        title: "New Assignment",
        course: courseId,
      });
      
      alert("Assignment created!");
    }
  };

  const deleteAssignment = async (assignmentId: string) => {
    if (!confirm("Are you sure you want to delete this assignment?")) {
      return;
    }

    try {
      await axios.delete(`${API_BASE}/api/assignments/${assignmentId}`);
      console.log("✅ Assignment deleted");
      await fetchAssignments();
      alert("Assignment deleted!");
    } catch (error: any) {
      console.error("⚠️ Using Redux fallback");
      dispatch(deleteAssignmentAction(assignmentId));
      alert("Assignment deleted! ");
    }
  };

  const updateAssignment = async () => {
    if (!assignment._id) {
      alert("Please select an assignment to update by clicking Edit");
      return;
    }

    try {
      await axios.put(
        `${API_BASE}/api/assignments/${assignment._id}`,
        { title: assignment.title }
      );
      console.log("✅ Assignment updated");
      await fetchAssignments();
      
      setAssignment({
        _id: "",
        title: "New Assignment",
        course: courseId,
      });
      
      alert("Assignment updated!");
    } catch (error: any) {
      console.error("⚠️ Using Redux fallback");
      dispatch(updateAssignmentAction(assignment as any));
      
      setAssignment({
        _id: "",
        title: "New Assignment",
        course: courseId,
      });
      
      alert("Assignment updated!");
    }
  };

  const startEdit = (a: any) => {
    setAssignment({
      _id: a._id,
      title: a.title,
      course: courseId,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="p-4">
      <h2>Assignments</h2>
      
      {/* Assignment Management Form */}
      <div className="mb-4">
        <h5>{assignment._id ? "Edit Assignment" : "New Assignment"}</h5>
        
        <input
          className="form-control mb-2"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          placeholder="Assignment title"
        />
        
        <div className="d-flex gap-2">
          <button
            className="btn btn-warning"
            onClick={updateAssignment}
            disabled={!assignment._id}
          >
            Update
          </button>
          
          <button
            className="btn btn-primary"
            onClick={addAssignment}
          >
            Add Assignment
          </button>
        </div>
      </div>

      <hr />

      {/* Assignments List */}
      <ul className="list-group">
        {assignments.map((a: any) => (
          <li key={a._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{a.title}</strong>
              <div className="small text-muted">Course: {a.course}</div>
            </div>
            
            <div className="d-flex gap-2">
              <button
                className="btn btn-sm btn-warning"
                onClick={() => startEdit(a)}
              >
                Edit
              </button>
              
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteAssignment(a._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {assignments.length === 0 && (
        <p className="text-muted mt-3">No assignments yet. Create one above!</p>
      )}
    </div>
  );
}