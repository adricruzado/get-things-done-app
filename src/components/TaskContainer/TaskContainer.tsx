import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../../types";
import TaskCard from "../TaskCard/TaskCard";

const TaskContainer = (): React.ReactElement => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = (description: string) => {
    const newTask: Task = {
      id: uuidv4(),
      description: description,
      isDone: false,
      isEditing: false,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <div className="task-container">
      <h1>Get Things Done!</h1>
      <TaskForm createTask={createTask} />
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskContainer;
