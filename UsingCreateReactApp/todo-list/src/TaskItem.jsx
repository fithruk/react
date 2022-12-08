import React from "react";
import PropTypes from "prop-types";

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

TaskItem.propTypes = {
  task: PropTypes.string,
  status: PropTypes.bool,
  id: PropTypes.string,
  changeTaskStatus: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default TaskItem;
