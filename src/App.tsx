import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodosContextProvider } from "./context/TodosContext";

const App: React.FC = () => {
  return (
    <TodosContextProvider>
      <TodoForm></TodoForm>
      <TodoList></TodoList>
    </TodosContextProvider>
  );
};

export default App;
