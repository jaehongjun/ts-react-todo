import React, { useState } from "react";
import { useTodosDispatch } from "../context/TodosContext";

function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useTodosDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      text: value
    });
    setValue("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        name="todoName"
        value={value}
        onChange={onChange}
        placeholder="무엇을 하실 건가요??"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
