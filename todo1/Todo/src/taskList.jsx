import TaskListEntry from './taskListEntry.jsx'

const TaskList = ({ tasks }) => {
  return (
    <ol>
      {tasks.map((task, i) => {
        return <TaskListEntry key={i} task={task} />
      })}
    </ol>
  )
}

export default TaskList;