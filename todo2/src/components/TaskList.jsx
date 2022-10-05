import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <ol className="task-list">
      {tasks.map((task, i) => {
        return (
          <li key={i}>{task.task}</li>
        )
      })}
    </ol>
  )
}

export default TaskList;