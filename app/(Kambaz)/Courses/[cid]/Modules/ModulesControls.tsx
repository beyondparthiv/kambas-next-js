"use client";

import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaPlus, FaCheckCircle } from "react-icons/fa";
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="wd-modules-controls" className="text-nowrap d-flex gap-2 mb-3">
      <Button variant="light" className="border rounded-1">
        Collapse All
      </Button>
      <Button variant="light" className="border rounded-1">
        View Progress
      </Button>

      <Button variant="light" className="border rounded-1 d-flex align-items-center gap-2">
        Publish All <FaCheckCircle className="text-success" /> <span>▾</span>
      </Button>

      <Button variant="danger" onClick={handleShow}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>

      <ModuleEditor
        show={show}
        handleClose={handleClose}
        dialogTitle="Add Module"
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
    </div>
  );
}
