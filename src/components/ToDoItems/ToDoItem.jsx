import React from "react";

export function ToDoItem({ todo, toggleTodo }) {
  const { id, task, completed } = todo;
  const handleTodoClick = () => {
    toggleTodo(id);
  };
  const divStyle = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "springgreen",
    borderRadius: "10px",
    marginTop: "5px",
  };

  return (
    <div style={divStyle}>
      <input
        style={{ marginRight: "10px" }}
        type="checkbox"
        checked={completed}
        onChange={handleTodoClick}
      />
      {task}
    </div>
  );
}
