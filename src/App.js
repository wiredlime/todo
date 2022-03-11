import React, { useState } from "react";
import "./App.css";
import Filterwrpapper from "./components/Filterwrpapper";
import Header from "./components/Header.js";
import Tasklist from "./components/Tasklist.js";
import Form from "./components/Form.js";
function Todolist() {
  const [tasks, setTasks] = useState([
    { id: "num1", title: "Clean up", status: 1 },
    { id: "num2", title: "Exercise", status: 0 },
    { id: "num3", title: "Homework for Science classes", status: 0 },
  ]);
  const [showIncompleted, setShowIncompleted] = useState(false);
  const [newTask, setNewTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = { id: Date.now(), title: newTask, status: 0 };
      setTasks([...tasks, task]);
      //"setTasks" là func set lai State cua ca array object
      //dua state variable "tasks" vao meaning pass all existing tasks in and overwrite with or add in new task.
      setNewTask("");
    }
  };
  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status ? 1 : 0 };
          //status moi duoc chuyen vao se overwrite status 0 co san luc moi add task
        }
        return task;
      })
    );
  };
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const removeTask = (taskId) => {
    setTasks(
      tasks.filter((task) => {
        if (task.id !== taskId) return task;
      })
    );
  };
  return (
    <div className="container">
      <Header title="Todo List" subTitle="One day at a time" />
      <Tasklist
        tasks={tasks}
        showIncompleted={showIncompleted}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
      />
      <Filterwrpapper
        showIncompleted={showIncompleted}
        setShowIncompleted={setShowIncompleted}
      />
      <Form
        handleSubmit={handleSubmit}
        handleinputChange={handleInputChange}
        newTAsk={newTask}
      />
    </div>
  );
}

export default Todolist;
