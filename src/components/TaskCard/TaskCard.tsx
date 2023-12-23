import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Task } from "../../types";
import { MouseEventHandler } from "react";

interface TaskCardProps {
  task: Task;
  toggleDone: (taskId: string) => MouseEventHandler<HTMLParagraphElement>;
}

const TaskCard = ({ task, toggleDone }: TaskCardProps): React.ReactElement => {
  return (
    <div className="task">
      <p
        onClick={toggleDone(task.id)}
        className={`${task.isDone ? "done" : ""}`}
      >
        {task.description}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default TaskCard;
