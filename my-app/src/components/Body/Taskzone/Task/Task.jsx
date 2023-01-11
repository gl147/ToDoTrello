import "./Task.scss";

let Task = (props) => {
  return (
    <div className="task">
      <div className="task-header">
        <div className="task-name"></div>
        <div className="task-menu">...</div>
      </div>
      <div className="task-body">
        <div className="task-card">card 1</div>
        <div className="task-card">card 2</div>
        <div className="task-card">card 3</div>
        <div className="task-card">card 4</div>
        <div className="task-card">card 5</div>
      </div>
      <div className="task-footer">
        <div className="add-card"> + Add card</div>
        <div className="task-footer-menu">...</div>
      </div>
    </div>
  );
};

export default Task;
