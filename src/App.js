import "./App.css";
import { useState } from "react";

function App() {
  // your JavaScript goes here
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");
  const [editValue, setEditValue] = useState("");
  const [inputIndex, setinputIndex] = useState(-1);

  function updateIndex(index) {
    setinputIndex(index);
    setEditValue(tasks[index]);
  }
  function updateCurrentTask(index) {
    tasks[index] = editValue;
    setTasks(tasks);
    setinputIndex(-1);
  }

  function addTask() {
    setTasks([...tasks, value]);
    setValue("");
  }
  function handleDelete(itemIndex) {
    const newTasks = tasks.filter((item, index) => index !== itemIndex);
    setTasks(newTasks);
  }
  return (
    <div>
      <div className="container">
        <h1 className="header">get things done!</h1>
        <div className="task-box">
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            type="text"
            name="task"
            className="task-input"
            id="task-input"
          ></input>
          <button className="addBtn" id="addTask" onClick={addTask}>
            add task
          </button>
        </div>
        <ul id="list-container">
          {tasks.map((task, index) => (
            <div key={index}>
              {inputIndex !== index && (
                <li className="task-display" id="task-value">
                  {task}
                  <div className="action-btn">
                    <div
                      id="edit"
                      className="edit"
                      onClick={() => updateIndex(index)}
                    >
                      <i
                        className="fa-regular fa-pen-to-square"
                        id="editIcon"
                      ></i>
                    </div>
                    <div
                      id="del"
                      className="del"
                      onClick={() => handleDelete(index)}
                    >
                      <i className="fa-solid fa-trash" id="delIcon"></i>
                    </div>
                  </div>
                </li>
              )}
              {inputIndex === index && (
                <div className="task-box">
                  <input
                    value={editValue}
                    onChange={(event) => setEditValue(event.target.value)}
                    type="text"
                    name="task"
                    className="task-input"
                  ></input>
                  <button
                    className="addBtn"
                    onClick={() => updateCurrentTask(index)}
                  >
                    update task
                  </button>
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;