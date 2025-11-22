// app/(Kambaz)/Courses/[cid]/Modules/page.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import type { RootState, AppDispatch } from "../../../Store/store";
import { setModules, addModule as addModuleAction, deleteModule as deleteModuleAction, updateModule as updateModuleAction } from "./reducer";

const API_BASE = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

export default function ModulesPage() {
  const params = useParams();
  const courseId = params?.cid as string;
  const dispatch = useDispatch<AppDispatch>();

  const modules = useSelector((s: RootState) => s.modules.modules);

  const [module, setModule] = useState({
    _id: "",
    name: "New Module",
    description: "New Description",
    course: courseId,
  });

  // Fetch modules on mount
  useEffect(() => {
    if (courseId) {
      fetchModules();
    }
  }, [courseId]);

  const fetchModules = async () => {
    try {
      const response = await axios.get(
        `${API_BASE}/api/courses/${courseId}/modules`
      );
      console.log("✅ Fetched modules from backend:", response.data);
      dispatch(setModules(response.data));
    } catch (error: any) {
      console.error("⚠️ Backend not available, using Redux only");
    }
  };

  const addModule = async () => {
    // ✅ WORKS WITHOUT BACKEND
    const newModule = {
      _id: new Date().getTime().toString(),
      name: module.name,
      description: module.description,
      course: courseId,
    };

    console.log("🔵 Adding module (Redux):", newModule);
    dispatch(addModuleAction(newModule));
    
    setModule({
      _id: "",
      name: "New Module",
      description: "New Description",
      course: courseId,
    });

    alert("Module created!");
  };

  const deleteModule = async (moduleId: string) => {
    if (!confirm("Are you sure you want to delete this module?")) {
      return;
    }

    console.log("🔵 Deleting module (Redux):", moduleId);
    dispatch(deleteModuleAction(moduleId));
    alert("Module deleted!");
  };

  const updateModule = async () => {
    if (!module._id) {
      alert("Please select a module to update by clicking Edit");
      return;
    }

    console.log("🔵 Updating module (Redux):", module);
    dispatch(updateModuleAction(module as any));
    
    setModule({
      _id: "",
      name: "New Module",
      description: "New Description",
      course: courseId,
    });

    alert("Module updated!");
  };

  const startEdit = (m: any) => {
    setModule({
      _id: m._id,
      name: m.name,
      description: m.description || "",
      course: courseId,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="wd-modules" className="p-4">
      <h2>Modules</h2>
      
      {/* Module Management Form */}
      <div id="wd-modules-toolbar" className="mb-4">
        <h5>{module._id ? "Edit Module" : "New Module"}</h5>
        
        <input
          className="form-control mb-2"
          value={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })}
          placeholder="Module name"
        />
        
        <input
          className="form-control mb-2"
          value={module.description}
          onChange={(e) => setModule({ ...module, description: e.target.value })}
          placeholder="Module description"
        />
        
        <div className="d-flex gap-2">
          <button
            className="btn btn-warning"
            onClick={updateModule}
            disabled={!module._id}
          >
            Update
          </button>
          
          <button
            className="btn btn-primary"
            onClick={addModule}
          >
            Add Module
          </button>
        </div>
      </div>

      <hr />

      {/* Modules List */}
      {modules.map((m: any) => (
        <div key={m._id} className="wd-module mb-3">
          <div className="wd-module-title">
            <div>
              <strong>{m.name}</strong>
              {m.description && <div className="small text-muted">{m.description}</div>}
            </div>
            
            <div className="wd-header-tools d-flex gap-2">
              <button
                className="btn btn-sm btn-warning"
                onClick={() => startEdit(m)}
              >
                Edit
              </button>
              
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteModule(m._id)}
              >
                Delete
              </button>
            </div>
          </div>

          {/* Lessons */}
          {m.lessons && m.lessons.length > 0 && (
            <div>
              {m.lessons.map((lesson: any) => (
                <div key={lesson._id} className="wd-lesson">
                  <div>
                    <strong>{lesson.name}</strong>
                    {lesson.description && <div className="small text-muted">{lesson.description}</div>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {modules.length === 0 && (
        <p className="text-muted">No modules yet. Create one above!</p>
      )}
    </div>
  );
}