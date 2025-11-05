"use client";

import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="float-end d-flex align-items-center gap-3">
      <FaPencil
        onClick={() => editModule(moduleId)}
        className="text-primary"
        role="button"
        title="Edit module name"
      />
      <FaTrash
        onClick={() => deleteModule(moduleId)}
        className="text-danger"
        role="button"
        title="Delete module"
      />
      <FaCheckCircle className="text-success" />
      <BsPlus className="fs-3" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
