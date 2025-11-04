"use client";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import type { RootState } from "../../store";

export default function TodoForm() {
  const { todo } = useSelector((s: RootState) => s.todosReducer);
  const dispatch = useDispatch();

  return (
    <div className="d-flex gap-2 align-items-center mb-2">
      {/* Controlled input -> value + onChange (no readonly warning) */}
      <input
        className="form-control"
        aria-label="Todo title"
        value={todo.title}
        onChange={(e) =>
          dispatch(setTodo({ ...todo, title: e.target.value }))
        }
      />
      <button
        id="wd-add-todo-click"
        className="btn btn-success"
        onClick={() => dispatch(addTodo(todo))}
      >
        Add
      </button>
      <button
        id="wd-update-todo-click"
        className="btn btn-warning"
        onClick={() => dispatch(updateTodo(todo))}
      >
        Update
      </button>
    </div>
  );
}
