import React from "react";
import "./TodoItem.css";
import { useTodosDispatch, Todo } from "../context/TodosContext";

type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
};

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useTodosDispatch();
  const onToggle = () => {
    dispatch({
      type: "TOGGLE",
      id: todo.id
    });
  };
  const onRemove = () => {
    dispatch({
      type: "REMOVE",
      id: todo.id
    });
  };
  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span className="text" onClick={onToggle}>
        {todo.text}
      </span>
      <span className="remove" onClick={onRemove}>
        (x)
      </span>
    </li>
  );
}

export default TodoItem;
