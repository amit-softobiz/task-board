import React,{useRef,useState,useEffect} from 'react'
import Card from '../UI/Card'
import classes from './TaskList.module.css'

const TaskList = (props) => {
    const statusInputRef = useRef();
    const [check,setCheck]= useState(false);
    const [status, setStatus] = useState('Active');
    const [filteredData, setFilteredData] = useState([]);
    useEffect(()=>{

    },[])

    const filterStatusHandler = (event)=>{
        const statusref=statusInputRef.current.value;
        setStatus(statusref);
        setCheck(true);
        const filtered = props.tasks.filter(item => item.status === event.target.value);
        setFilteredData(filtered);
    }    


  return (
    <Card className = {classes.tasks}>
          <select id="status" value={status} onChange={filterStatusHandler} ref={statusInputRef}>
            <option value="Active">Active</option>
            <option value="In Progress">In Progress</option>
            <option value="Complete">Complete</option>
          </select>

          {check ? <ul key={props.id}>
      {filteredData.map(task =>(
      <li>
          <b>{task.title}</b>   {task.status}   {task.description}   {task.date}
      </li>
      ))}
    </ul>:  <ul key={props.id}>
      {props.tasks.map(task =>(
      <li>
          <b>{task.title}</b>   {task.status}   {task.description}   {task.date}
      </li>
      ))}
    </ul>}
    </Card>
  )
}

export default TaskList
