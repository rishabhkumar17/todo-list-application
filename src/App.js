import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const addTask = () => {
    setTodoList([...todoList, currentTask]);
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Task..."
          onChange={(e) => setCurrentTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <hr />
    </div>
  );
}

export default App;
