"use client";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

type Props = { todo: { id: string; title: string } };

/**
 * Renders a single LI – no 'key' here (the key is set in the map in TodoList).
 */
export default function TodoItem({ todo }: Props) {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{todo.title}</span>
      <span className="d-flex gap-2">
        <button
          id="wd-set-todo-click"
          className="btn btn-sm btn-primary"
          onClick={() => dispatch(setTodo(todo))}
        >
          Edit
        </button>
        <button
          id="wd-delete-todo-click"
          className="btn btn-sm btn-danger"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </span>
    </li>
  );
}
