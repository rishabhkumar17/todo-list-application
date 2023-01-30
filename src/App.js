import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const inputTask = useRef(null);

  const addTask = () => {
    setTodoList([...todoList, { task: currentTask, completed: false }]);
    inputTask.current.value = '';
    setCurrentTask('');
  };

  const deleteTask = (taskToDelete) => {
    setTodoList(todoList.filter((task) => task.task !== taskToDelete));
  };

  const completeTask = (taskToComplete) => {
    setTodoList(
      todoList.map((task) => {
        return task.task === taskToComplete
          ? { task: taskToComplete, completed: true }
          : { task: task.task, completed: task.completed };
      })
    );
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Task..."
          onChange={(e) => setCurrentTask(e.target.value)}
          ref={inputTask}
          onKeyDown={(e) => {
            if (e.key === 'Enter') addTask();
          }}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <hr />
      <ul>
        {todoList.map((todo, key) => {
          return (
            <div id="task">
              <li key={key}>{todo.task}</li>
              <button onClick={() => completeTask(todo.task)}>Completed</button>
              <button onClick={() => deleteTask(todo.task)}>X</button>
              {todo.completed ? (
                <h1>Task Completed</h1>
              ) : (
                <h1>Task Not Completed</h1>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
