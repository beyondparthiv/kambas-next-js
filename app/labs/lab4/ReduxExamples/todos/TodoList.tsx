"use client";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

/**
 * Keys are applied to the elements returned by .map()
 * (fixes the “Each child in a list should have a unique key” warning).
 */
export default function TodoList() {
  const { todos } = useSelector((s: RootState) => s.todosReducer);

  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <TodoForm />
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}
