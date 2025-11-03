
"use client";
import React, { useState } from "react";

export default function Counter() {
  // initializing state to 7 (as per figure)
  const [count, setCount] = useState<number>(7);

  return (
    <div id="wd-counter-use-state" className="my-3">
      <h2 className="display-6">
        Counter: <span>{count}</span>
      </h2>

      <div className="d-flex gap-2">
        <button
          id="wd-counter-up-click"
          className="btn btn-success px-3"
          onClick={() => setCount(count + 1)}
        >
          Up
        </button>
        <button
          id="wd-counter-down-click"
          className="btn btn-danger px-3"
          onClick={() => setCount(count - 1)}
        >
          Down
        </button>
      </div>

      <hr />
    </div>
  );
}
