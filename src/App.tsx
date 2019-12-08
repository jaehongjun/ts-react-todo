import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <>
      <TodoForm></TodoForm>
      <TodoList></TodoList>
    </>
  );
};

export default App;
