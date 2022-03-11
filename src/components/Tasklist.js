import React from "react";

function Tasklist({ tasks, showIncompleted, setTaskStatus, removeTask }) {
  return (
    <ul className="task-list">
      {tasks
        .filter((task) => (showIncompleted ? task.status !== 1 : true))
        .map((task, index) => (
          <li key={task.id} className={task.status ? "done" : ""}>
            <span className="label">{task.title}</span>
            <div className="actions">
              <label className="box-control">
                <input
                  onChange={(e) => setTaskStatus(task.id, e.target.checked)}
                  type="checkbox"
                  checked={Boolean(task.status)}
                  className="btn-action btn-action-done"
                />
              </label>
              <button
                onClick={() => removeTask(task.id)}
                className="btn-action btn-action-delete"
              >
                X
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default Tasklist;
