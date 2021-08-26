import React from "react";
import { ToDoItem } from "../ToDoItems/ToDoItem.jsx";

export function ToDoList({ todos, toggleTodo }) {
  return (
    <>
      <div>
        {todos.map((t) => (
          <ToDoItem key={t.id} todo={t} toggleTodo={toggleTodo} />
        ))}
      </div>
    </>
  );
}
