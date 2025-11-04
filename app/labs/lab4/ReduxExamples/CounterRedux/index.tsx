"use client";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { increment, decrement } from "./counterReducer";

export default function CounterRedux() {
  const count = useSelector((state: RootState) => state.counterReducer.count);
  const dispatch = useDispatch();

  return (
    <div id="wd-counter-redux">
      <h2>Counter Redux</h2>
      <h3 id="wd-counter-redux-count">{count}</h3>
      <button
        onClick={() => dispatch(increment())}
        id="wd-counter-redux-increment-click"
        className="btn btn-outline-dark me-2"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        id="wd-counter-redux-decrement-click"
        className="btn btn-outline-dark"
      >
        Decrement
      </button>
      <hr />
    </div>
  );
}
