import React, { useRef, useState, useEffect } from "react";
import Card from "../UI/Card";
import classes from "./Addtask.module.css";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";
const Addtask = (props) => {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const dateInputRef = useRef();
  const [error, setError] = useState();
  const [newupdate, setNewUpdate] = useState();
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    setNewUpdate(props.updateddata);
  }, [props.updateddata]);

  console.log("newupdateuuuuuuuuuu", newupdate?.title);

  const addUserHandler = (event) => {
    const titleref = titleInputRef.current.value;
    const status = "Active";
    const descriptionref = descriptionInputRef.current.value;
    const dateref = dateInputRef.current.value;
    event.preventDefault();
    if (
      titleref.trim().length === 0 ||
      descriptionref.trim().length === 0 ||
      dateref.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message:
          "Please enter a valid title description and date (non-empty values).",
      });
      return;
    }
    props.onAddTask(titleref, status, descriptionref, dateref);
    setSuccess(true);
    titleInputRef.current.value = "";
    descriptionInputRef.current.value = "";
    dateInputRef.current.value = "";
  };
  const errorHandler = () => {
    setError(null);
  };
  const handleClose = () => {
    setSuccess(false)
  }
  return (
    <div>
      {success ? (
        <div className="outer-wrapper" onClick={handleClose}>
          <div className="inner-wrapper">
            <p className="text-message">Task Added Successfully!!!</p>
          </div>
        </div>
      ) : null}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" value ={newupdate?.title} ref={titleInputRef} />

          <label htmlFor="description">Description</label>
          <input id="description" type="text" value ={newupdate?.description} ref={descriptionInputRef} />

          <label htmlFor="date">Date</label>
          <input
            type="date"
            value ={newupdate?.date}
            min="2019-01-01"
            max="2022-12-31"
            ref={dateInputRef}
          />
          <label htmlFor="status">Status</label>
          <select
        id="status"
        value='Active'
        
        // ref={statusInputRef}
      >
        <option value="Active">Active</option>
        <option value="In Progress">In Progress</option>
        <option value="Complete">Complete</option>
      </select>{" "}

          <Button type="submit">Add Task</Button>{" "}
          <Button>Yes, Update</Button>{" "}
          <Button>Cancel</Button>
        </form>
      </Card>
    </div>
  );
};

export default Addtask;
