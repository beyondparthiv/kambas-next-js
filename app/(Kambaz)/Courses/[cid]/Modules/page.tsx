"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import {
  FaCheckCircle,
  FaPlus,
  FaEllipsisV,
  FaTrash,
  FaPencilAlt,
} from "react-icons/fa";
import { modules as seedModules } from "../../../Database";

type Lesson = { _id?: string; name: string };
type CourseModule = {
  _id?: string;
  course: string;
  name: string;
  lessons?: Lesson[];
  editing?: boolean;
};

export default function ModulesPage() {
  const { cid } = useParams<{ cid: string }>();

  // seed and keep all modules in local state
  const [modules, setModules] = useState<CourseModule[]>(
    (seedModules as CourseModule[]) ?? []
  );

  // modal state
  const [showEditor, setShowEditor] = useState(false);
  const [moduleName, setModuleName] = useState("");

  // derived: only this course's modules
  const courseModules = modules.filter((m) => m.course === cid);

  // actions
  const addModule = () => {
    const name = moduleName.trim() || "New Module";
    const newModule: CourseModule = {
      _id: Date.now().toString(),
      course: String(cid),
      name,
      lessons: [],
    };
    setModules((prev) => [...prev, newModule]);
    setModuleName("");
    setShowEditor(false);
  };

  const deleteModule = (moduleId: string) => {
    setModules((prev) => prev.filter((m) => m._id !== moduleId));
  };

  const startEdit = (moduleId: string) => {
    setModules((prev) =>
      prev.map((m) => (m._id === moduleId ? { ...m, editing: true } : m))
    );
  };

  const updateModule = (module: CourseModule) => {
    setModules((prev) => prev.map((m) => (m._id === module._id ? module : m)));
  };

  return (
    <div id="wd-modules">
      {/* Toolbar */}
      <div id="wd-modules-toolbar">
        <a href="#" className="btn-grey" onClick={(e) => e.preventDefault()}>
          Collapse All
        </a>

        <a href="#" className="btn-grey" onClick={(e) => e.preventDefault()}>
          View Progress
        </a>

        <div id="wd-publish-all">
          <a
            href="#"
            className="btn-grey"
            onClick={(e) => e.preventDefault()}
            style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            Publish All <FaCheckCircle className="wd-ok" />{" "}
            <span style={{ marginLeft: 4 }}>▼</span>
          </a>
          {/* simple hover dropdown (CSS shows/hides) */}
          <ul id="wd-publish-menu">
            <li>
              <FaCheckCircle className="wd-ok" /> Publish all
            </li>
            <li>○ Publish all items and modules</li>
            <li>🚫 Unpublish all</li>
            <li>✖ Unpublish all modules</li>
          </ul>
        </div>

        <button className="btn btn-danger rounded-3" onClick={() => setShowEditor(true)}>
          <FaPlus className="me-2" />
          Module
        </button>
      </div>

      {/* Modules list */}
      {courseModules.map((mod) => (
        <div key={mod._id ?? mod.name} className="wd-module">
          {/* Module header bar */}
          <div className="wd-module-title">
            {/* left: title (with drag glyph look) */}
            <span>▤ {mod.name}</span>

            {/* right: actions */}
            <div className="d-flex align-items-center" style={{ gap: 14 }}>
              <div className="wd-actions">
                <FaCheckCircle className="wd-ok" />
                <FaPlus className="wd-plus" />
                <FaEllipsisV className="wd-kebab" />
              </div>
              <div className="wd-header-tools">
                <button
                  className="btn-icon"
                  title="Edit name"
                  onClick={() => startEdit(mod._id!)}
                >
                  <FaPencilAlt />
                </button>
                <button
                  className="btn-icon text-danger"
                  title="Delete module"
                  onClick={() => deleteModule(mod._id!)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>

          {/* Inline edit row (only when editing is true) */}
          {mod.editing && (
            <div className="wd-lesson">
              <div className="d-flex align-items-center">
                <span className="wd-drag">▤</span>
                <input
                  className="form-control w-50"
                  defaultValue={mod.name}
                  onChange={(e) => updateModule({ ...mod, name: e.target.value })}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      updateModule({ ...mod, editing: false });
                    }
                  }}
                />
              </div>
              <div className="wd-actions">
                <FaCheckCircle className="wd-ok" />
                <FaEllipsisV className="wd-kebab" />
              </div>
            </div>
          )}

          {/* Lessons */}
          {(mod.lessons ?? []).map((lesson, idx) => (
            <div key={`${mod._id}-l-${idx}`} className="wd-lesson">
              <div className="d-flex align-items-center">
                <span className="wd-drag">▤</span>
                <span>{lesson.name}</span>
              </div>
              <div className="wd-actions">
                <FaCheckCircle className="wd-ok" />
                <FaEllipsisV className="wd-kebab" />
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Lightweight modal (Bootstrap-style) */}
      {showEditor && (
        <>
          <div className="modal d-block" role="dialog" tabIndex={-1}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Module</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setShowEditor(false)}
                  />
                </div>
                <div className="modal-body">
                  <input
                    className="form-control"
                    value={moduleName}
                    onChange={(e) => setModuleName(e.target.value)}
                    placeholder="Module name"
                    autoFocus
                  />
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setShowEditor(false)}
                  >
                    Cancel
                  </button>
                  <button className="btn btn-primary" onClick={addModule}>
                    Add Module
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop show" />
        </>
      )}
    </div>
  );
}
