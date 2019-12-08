import React, { useState } from "react";

function TodoForm() {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 값 생성하기
    setValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input name="todoName" value={value} onChange={onChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
