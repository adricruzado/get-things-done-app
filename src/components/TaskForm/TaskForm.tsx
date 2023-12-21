import { ChangeEvent, FormEvent, useState } from "react";

interface TaskFormProps {
  createTask: (description: string) => void;
}

const TaskForm = ({ createTask }: TaskFormProps): React.ReactElement => {
  const [task, setTask] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createTask(task);

    setTask("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task__input"
        placeholder="What is the task today?"
        value={task}
        onChange={handleChange}
      />
      <button type="submit" className="task__button">
        Create task
      </button>
    </form>
  );
};

export default TaskForm;
