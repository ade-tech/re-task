import React, { useState } from "react";
import { Task } from "./types";

export function Form({ addTask }: { addTask: (task: Task) => void }) {
  const [inputData, setChange] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const inputDataForm = new FormData(e.currentTarget).get("text") as string;

    if (inputDataForm !== "") {
      const taskObject: Task = {
        id: `${Math.random()}`,
        description: inputDataForm,
        isCompleted: false,
      };

      addTask(taskObject);
      setChange("");
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="mb-1">New Form</h2>
      <div className="task-form">
        <input
          type="text"
          name="text"
          className="form-input"
          value={inputData}
          onChange={(e) => setChange(e.target.value)}
        />
        <button className="btn">Submit &rarr;</button>
      </div>
    </form>
  );
}

export default Form;
