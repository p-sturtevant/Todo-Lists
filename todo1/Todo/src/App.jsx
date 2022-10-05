
import React, { useState } from 'react';
import './App.css';
import TaskList from './taskList.jsx';
function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState('');

  const handleSubmit = (taskValue) => {
    let temp = tasks;
    temp.push(taskValue);
    setTasks(temp);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo</h1>
        <h3>Parker Sturtevant</h3>
      </header>
      <form onSubmit={event => {
        event.preventDefault();
        setValue('');
        handleSubmit(value);
      }}>
        <input type='text' className='add-task' placeholder="Add a task" value={value} onChange={event => {
          setValue(event.target.value)
        }} />
        <button className='btn' type='submit'>Submit</button>
      </form>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
