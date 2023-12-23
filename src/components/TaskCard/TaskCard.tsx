import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Task } from "../../types";
import { MouseEventHandler } from "react";

interface TaskCardProps {
  task: Task;
  toggleDone: (taskId: string) => MouseEventHandler<HTMLParagraphElement>;
  deleteTask: (taskId: string) => MouseEventHandler<SVGSVGElement>;
}

const TaskCard = ({
  task,
  toggleDone,
  deleteTask,
}: TaskCardProps): React.ReactElement => {
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
        <FontAwesomeIcon icon={faTrash} onClick={deleteTask(task.id)} />
      </div>
    </div>
  );
};

export default TaskCard;
