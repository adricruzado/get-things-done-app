const TaskForm = (): React.ReactElement => {
  return (
    <form className="task-form">
      <input
        type="text"
        className="task__input"
        placeholder="What is the task today?"
      />
      <button type="submit" className="task__button">
        Create task
      </button>
    </form>
  );
};

export default TaskForm;
