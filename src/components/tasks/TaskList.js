import React from 'react'
import Card from '../UI/Card'
import classes from './TaskList.module.css'
const TaskList = (props) => {
  return (
    <Card className = {classes.tasks}>
    <ul key={props.id}>
      {props.tasks.map(task =>(
      <li>
          {task.title} {task.status}{task.description}{task.date}
      </li>))}
    </ul>
    </Card>
  )
}

export default TaskList
