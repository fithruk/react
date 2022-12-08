import React, { Component } from "react";
import TaskItem from "./TaskItem";
import CreateTask from "./CreateTask";
import {
  getAllTasks,
  createNewTask,
  updateStatusOfExistingTask,
  deleteDeprecatedTask,
} from "./serverRequests";
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.addNewTask = this.addNewTask.bind(this);
    this.changeTaskStatus = this.changeTaskStatus.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addNewTask(value) {
    const newTask = {
      task: value,
      status: false,
    };
    createNewTask(newTask)
      .then(() => {
        getAllTasks().then((tasks) =>
          this.setState({
            tasks,
          })
        );
      })
      .catch((e) => {
        throw new Error(e);
      });
  }

  changeTaskStatus(id) {
    const { tasks } = this.state;
    let { task, status } = tasks.find((task) => task.id === id);
    updateStatusOfExistingTask(id, { task, status: !status }).then(() => {
      getAllTasks().then((tasks) =>
        this.setState({
          tasks,
        })
      );
    });
  }

  deleteTask(id) {
    deleteDeprecatedTask(id)
      .then(() => {
        getAllTasks().then((tasks) =>
          this.setState({
            tasks,
          })
        );
      })
      .catch((e) => {
        throw new Error(e);
      });
  }

  componentDidMount() {
    getAllTasks()
      .then((data) =>
        this.setState({
          tasks: data,
        })
      )
      .catch((e) => {
        throw new Error(e);
      });
  }

  render() {
    const { tasks } = this.state;
    const sortedTasks = tasks.slice().sort((a, b) => a.status - b.status);
    return (
      <>
        <CreateTask addNewTask={this.addNewTask} />
        <ul className="list">
          {sortedTasks.map((task) => (
            <TaskItem
              {...task}
              key={task.id}
              changeTaskStatus={this.changeTaskStatus}
              deleteTask={this.deleteTask}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default TaskList;
