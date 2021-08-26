import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToDoList } from "./components/ToDoList/ToDoList.jsx";

const KEY = "todosApp.todos";

export default function App() {
  const [todos, setTodos] = useState([]);

  const todoTaskRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    // console.log("useefect");
    // console.log(storedTodos);
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value;

    if (task === "") return;

    setTodos((todos) => {
      return [...todos, { id: uuidv4(), task: task, completed: false }];
    });

    todoTaskRef.current.value = null;
  };

  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  let aux = todos.filter((t) => !t.completed).length;

  return (
    <React.Fragment>
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoTaskRef} type="text" placeholder="Nueva tarea" />
      <button onClick={handleTodoAdd}>Agregar ➕</button>
      <button onClick={handleClearAll}>Borrar 🗑️</button>
      <p>Las tareas sin finalizar son : {aux}</p>
    </React.Fragment>
  );
}
