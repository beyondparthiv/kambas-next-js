"use client";

import React, { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");

  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>

      <input
        className="form-control mb-2"
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <input
        className="form-control mb-2"
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />

      <a
        id="wd-path-parameter-add"
        className="btn btn-primary me-2"
        href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}
      >
        Add {a} + {b}
      </a>

      <a
        id="wd-path-parameter-subtract"
        className="btn btn-danger"
        href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}
      >
        Subtract {a} - {b}
      </a>

      <hr />
    </div>
  );
}
