import { useState } from 'react';

const TaskListEntry = ({ task }) => {
  const [done, setDone] = useState(false);
  return (
    <li>{task}</li>
  )
}
export default TaskListEntry;