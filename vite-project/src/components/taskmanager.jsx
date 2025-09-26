import { useState } from "react";
import { Taskdata } from "./task"; 
import "./taskmanager.css";

export function TaskManager() {
  const [task, setTask] = useState({ title: "", priority: "", status: "Pending" });
  const [forceRender, setForceRender] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  

  function handleChange(e) {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });

  }

  // Form submit handler
  function handleSubmit(e) {
    e.preventDefault();

    if (task.title.trim() === "" || task.priority === "") {
      alert("Please enter task name and priority");
      return;
    }

    Taskdata.push(task);
    setTask({ title: "", priority: "", status: "incomplete" });
    setForceRender(!forceRender);
  }

  // Search / Filter tasks
  function filterData(value) {
    const data = Taskdata.filter((v) =>
      v.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData([...data]);
  }


  // Toggle status
  function changeState(idx) {
    Taskdata[idx].status =
      Taskdata[idx].status === "Pending" ? "Completed" : "Pending";
    setForceRender(!forceRender);
  }


  // Delete task
  function deleteTask(idx) {
    Taskdata.splice(idx, 1); // remove task from array
    setForceRender(!forceRender);
  }

  const showData = filteredData.length > 0 ? filteredData : Taskdata;

  return (
    <>
    <div className="header">
      <h1 className="heading">This is Task Manager</h1>

      {/* Search */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search task name"
          onChange={(e) => filterData(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Form */}
      <div className="form-container">
        <form onSubmit={handleSubmit} className="task-form">
          <input
            type="text"
            name="title"
            value={task.title}
            placeholder="Enter task name"
            onChange={handleChange}
            className="task-input"
          />

          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="task-select"
          >
            <option value="">Select priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

          <input type="submit" value="Add Task" className="submit-btn" />
        </form>
      </div>

      {/* Task List */}
      <div className="task-list">
        {showData.map((value, idx) => (
          <div key={idx} className="task-item">
            <h3 className="task-title">{value.title}</h3>
            <p className={`priority ${value.priority}`}>({value.priority})</p>
            <button
              className={`status-btn ${value.status}`}
              onClick={() => changeState(idx)}
            >
              {value.status}
            </button>
            <button className="delete-btn" onClick={() => deleteTask(idx)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
