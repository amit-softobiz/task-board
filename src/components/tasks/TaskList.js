import React,{useRef,useState} from 'react'
import Card from '../UI/Card'
import classes from './TaskList.module.css'
const TaskList = (props) => {
    const statusInputRef = useRef();
    const [status, setStatus] = useState();
    const filterStatusHandler = (event)=>{
        const statusref=statusInputRef.current.value;
        setStatus(statusref);
    }    
    const getTasksByStatus = (status) =>{
    props.tasks.filter(task => task.status === status);
    console.log()
    }


  return (
    <Card className = {classes.tasks}>

          <select id="status" value="Active" onChange={filterStatusHandler} ref={statusInputRef}>
            <option value="active">Active</option>
            <option value="inprogress">In Progress</option>
            <option value="complete">Complete</option>
          </select>

    <ul key={props.id}>
      {props.tasks.map(task =>(
        

      <li>
          {task.title}   {task.status}   {task.description}   {task.date}
      </li>
      ))}
    </ul>
    </Card>
  )
}

export default TaskList
