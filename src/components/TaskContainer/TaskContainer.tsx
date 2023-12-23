import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../../types";
import TaskCard from "../TaskCard/TaskCard";
import EditTaskForm from "../EditTaskForm/EditTaskForm";

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

  const toggleDone = (
    taskId: string
  ): React.MouseEventHandler<HTMLParagraphElement> => {
    return () => {
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, isDone: !task.isDone } : task
        )
      );
    };
  };

  const deleteTask = (
    taskId: string
  ): React.MouseEventHandler<SVGSVGElement> => {
    return () => {
      setTasks(tasks.filter((task) => task.id !== taskId));
    };
  };

  const modifyTask = (
    taskId: string
  ): React.MouseEventHandler<SVGSVGElement> => {
    return () => {
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, isEditing: !task.isEditing } : task
        )
      );
    };
  };

  const updateTask = (value: string, taskId: string): void => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, description: value, isEditing: !task.isEditing }
          : task
      )
    );
  };

  return (
    <div className="task-container">
      <h1>Get Things Done!</h1>
      <TaskForm createTask={createTask} />
      {tasks.map((task) =>
        task.isEditing ? (
          <EditTaskForm key={task.id} updateTask={updateTask} task={task} />
        ) : (
          <TaskCard
            deleteTask={deleteTask}
            toggleDone={toggleDone}
            modifyTask={modifyTask}
            task={task}
            key={task.id}
          />
        )
      )}
    </div>
  );
};

export default TaskContainer;
