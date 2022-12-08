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
    this.loadDataFromServer = this.loadDataFromServer.bind(this);
  }

  async addNewTask(value) {
    try {
      const newTask = {
        task: value,
        status: false,
      };
      await createNewTask(newTask);
      this.loadDataFromServer();
    } catch (error) {
      throw new Error(error);
    }
  }

  async changeTaskStatus(id) {
    try {
      const { tasks } = this.state;
      let { task, status } = tasks.find((task) => task.id === id);
      await updateStatusOfExistingTask(id, {
        task,
        status: !status,
      });
      this.loadDataFromServer();
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteTask(id) {
    try {
      await deleteDeprecatedTask(id);
      this.loadDataFromServer();
    } catch (error) {
      throw new Error(error);
    }
  }

  async loadDataFromServer() {
    try {
      const tasks = await getAllTasks();
      this.setState({ tasks });
    } catch (error) {
      throw new Error(error);
    }
  }

  componentDidMount() {
    this.loadDataFromServer();
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
