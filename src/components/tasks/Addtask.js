import React,{useRef, useState} from 'react'
import Card from '../UI/Card'
import classes from './Addtask.module.css'
import ErrorModal from '../UI/ErrorModal';
const Addtask = (props) => {
    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
    const dateInputRef = useRef();
    const [error, setError] = useState();

    const addUserHandler = (event)=>{
        const titleref=titleInputRef.current.value;
        const status = "Active"
        const descriptionref=descriptionInputRef.current.value;
        const dateref=dateInputRef.current.value;
        event.preventDefault();
        if(titleref.trim().length === 0 || descriptionref.trim().length === 0 || dateref.trim().length ===0){
            setError({
                title:'Invalid Input',
                message : 'Please enter a valid title description and date (non-empty values).'
            })
            return;
        }
        props.onAddTask(titleref,status,descriptionref,dateref);
        titleInputRef.current.value='';
        descriptionInputRef.current.value='';
        dateInputRef.current.value='';
     }
     const errorHandler=()=>{
        setError(null);
    }
  return (
    <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor='title'>Title</label>
      <input id="title" type="text" ref={titleInputRef}/>
  
      <label htmlFor='description'>Description</label>
      <input id="description" type="text" ref={descriptionInputRef}/>

      <label htmlFor='date'>Date</label>
      <input type='date' min='2019-01-01' max="2022-12-31" ref={dateInputRef} />
      
      <button type="submit">Add Task</button>
    </form>
    </Card>
    </div>
  )
}

export default Addtask
