import { JSX, useState } from "react";
import { Task } from "./types";

const List = ({
  tasks,
  toggleTask,
}: {
  tasks: Task[];
  toggleTask: (task: Task) => void;
}) => {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
      ))}
    </ul>
  );
};

function TaskItem({
  task,
  toggleTask,
}: {
  task: Task;
  toggleTask: (task: Task) => void;
}): JSX.Element {
  const [isChecked, setIsChecked] = useState(task.isCompleted);
  return (
    <li>
      {task.description}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          toggleTask(task);
          setIsChecked((cur) => !cur);
        }}
      />
    </li>
  );
}

export default List;
