import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Task } from "../../types";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps): React.ReactElement => {
  return (
    <div className="task">
      <p>{task.description}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default TaskCard;
