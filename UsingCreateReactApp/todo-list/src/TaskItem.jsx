import React from "react";

const TaskItem = ({ task, status, id, changeTaskStatus, deleteTask }) => {
  const classNames = status ? "list-item list-item_done" : "list-item";
  return (
    <li className={classNames}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={status}
        onChange={() => changeTaskStatus(id)}
      />
      <span className="list-item__text">{task}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => {
          deleteTask(id);
        }}
      ></button>
    </li>
  );
};

export default TaskItem;
