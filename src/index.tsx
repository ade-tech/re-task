import { useState } from "react";
import "./index.css";
import { type Task } from "./types";
import Form from "./Form";
import List from "./list";

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => getFromLocalStorage());

  function saveToLocalStorage(task: Task[]) {
    localStorage.setItem("theTasks", JSON.stringify(task));
  }
  function getFromLocalStorage() {
    const item = localStorage.getItem("theTasks");
    if (item === null) return [];
    const parseItem: Task[] = JSON.parse(item);
    return parseItem;
  }

  function toggleTask(task: Task): void {
    const newTask: Task[] = tasks.map((t) => {
      if (t.id !== task.id) return t;
      t.isCompleted = !t.isCompleted;
      return t;
    });
    saveToLocalStorage(newTask);
  }

  function addTask(task: Task): void {
    setTasks((curtasks) => {
      const newTask = [...curtasks, task];
      saveToLocalStorage(newTask);
      return newTask;
    });
  }
  return (
    <div>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
