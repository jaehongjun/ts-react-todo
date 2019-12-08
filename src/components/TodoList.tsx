import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = [
    {
      id: 1,
      text: "Context API 배우기",
      done: true
    },
    {
      id: 2,
      text: "Typescript 배우기",
      done: true
    },
    {
      id: 3,
      text: "Context와 typescript 함께 사용하기",
      done: false
    }
  ];

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id}></TodoItem>
      ))}
    </ul>
  );
}

export default TodoList;
