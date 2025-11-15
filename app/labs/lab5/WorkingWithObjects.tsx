"use client";
import React from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithObjects() {
  return (
    <div id="wd-working-with-objects">
      <h3>Working with Objects</h3>

      {/* Get Assignment */}
      <h4>Get Assignment</h4>
      <a
        id="wd-retrieve-assignment"
        href={`${HTTP_SERVER}/lab5/assignment`}
        className="btn btn-primary mb-2"
      >
        Get Assignment
      </a>
      <hr />

      {/* Get Title */}
      <h4>Get Title</h4>
      <a
        id="wd-retrieve-assignment-title"
        href={`${HTTP_SERVER}/lab5/assignment/title`}
        className="btn btn-primary mb-2"
      >
        Get Title
      </a>
      <hr />

      {/* Update Title */}
      <h4>Update Title</h4>
      <a
        id="wd-update-title-nodejs"
        href={`${HTTP_SERVER}/lab5/assignment/title/UpdatedTitle`}
        className="btn btn-warning mb-2"
      >
        Update Title
      </a>
      <hr />

      {/* Get Module */}
      <h4>Get Module</h4>
      <a
        id="wd-retrieve-module"
        href={`${HTTP_SERVER}/lab5/module`}
        className="btn btn-primary mb-2"
      >
        Get Module
      </a>
      <hr />

      {/* Get Module Name */}
      <h4>Get Module Name</h4>
      <a
        id="wd-retrieve-module-name"
        href={`${HTTP_SERVER}/lab5/module/name`}
        className="btn btn-primary mb-2"
      >
        Get Module Name
      </a>
    </div>
  );
}
