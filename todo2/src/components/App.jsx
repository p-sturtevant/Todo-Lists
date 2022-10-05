import React, { useEffect, useState } from "react";
import TaskList from './TaskList.jsx';
import axios from "axios";
const App = ({ name }) => {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState('');

  //Handle adding a task to the list
  const addTask = (value) => {
    axios.post('/tasks', { value })
      .then(response => {
        console.log(response)
        getTasks();
      })
      .catch(err => {
        console.log(err);
      })
    setValue('');
    console.log('Post Sent')
  }

  const getTasks = () => {
    axios.get('/tasks')
      .then(data => {
        setTasks(data.data)
      })
      .catch(err => {
        console.log(err);
      })
  }
  useEffect(() => {
    getTasks();
  }, [])
  return (
    <div>
      <div className='header'>
        <h1>Todo List</h1>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        addTask(value);
      }}> {/*add a submit handler here*/}
        <input className="add-task" type='text' value={value} placeholder=" Add a task" onChange={e => {
          setValue(e.target.value);
        }} />
        <button className="btn" type="submit">Add</button>
      </form>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;