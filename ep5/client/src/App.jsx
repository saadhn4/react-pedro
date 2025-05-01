import React, { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    // grab everything from the todoList along with new Task
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
  };

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      // if (task === taskName) {
      //   return false;
      // } else {
      //   return true;
      // }
      return taskName != taskName;
    });
    setTodoList(newTodoList);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Ep 5</h1>
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((todo, value) => {
          return (
            <div>
              <h1>{todo}</h1>
              {/* if im passing an argument in the function u need to pass it in a callback */}
              <button
                onClick={() => {
                  deleteTask(todo);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
