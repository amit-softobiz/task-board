import React,{useRef, useState} from 'react'
import Card from '../UI/Card'
import classes from './Addtask.module.css'
const Addtask = (props) => {
    const titleInputRef = useRef();
    const statusInputRef = useRef();
    const descriptionInputRef = useRef();
    const dateInputRef = useRef();
    const [error, setError] = useState();

    const addUserHandler = (event)=>{
        const titleref=titleInputRef.current.value;
        const statusref=statusInputRef.current.value;
        const descriptionref=descriptionInputRef.current.value;
        const dateref=dateInputRef.current.value;
        event.preventDefault();
        if(titleref.trim().length === 0 || statusref.trim().length ===0 || descriptionref.trim().length === 0 || dateref.trim().length ===0){
            setError({
                title:'Invalid Input',
                message : 'Please enter a valid title,status, description and date (non-empty values).'
            })
            return;
        }
        props.onAddTask(titleref,statusref,descriptionref,dateref);
        titleInputRef.current.value='';
        statusInputRef.current.value='';
        descriptionInputRef.current.value='';
        dateInputRef.current.value='';
     }
  return (
    <div>
       <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor='title'>Title</label>
      <input id="title" type="text" ref={titleInputRef}/>

      <label htmlFor='status'>Status</label>
      <input id="status" type="text" ref={statusInputRef}/>

      <label htmlFor='description'>Description</label>
      <input id="description" type="text" ref={descriptionInputRef}/>

      <label htmlFor='date'>Date</label>
      <input id="date" type="text" ref={dateInputRef}/>

      <button type="submit">Add Task</button>
    </form>
    </Card>
    </div>
  )
}

export default Addtask
