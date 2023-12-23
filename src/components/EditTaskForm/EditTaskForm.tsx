import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../../types";

interface EditTaskFormProps {
  task: Task;
  updateTask: (value: string, taskId: string) => void;
}

const EditTaskForm = ({
  task,
  updateTask,
}: EditTaskFormProps): React.ReactElement => {
  const [value, setValue] = useState(task.description);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    updateTask(value, task.id);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task__input"
        placeholder="Update task"
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className="task__button">
        Update task
      </button>
    </form>
  );
};

export default EditTaskForm;
