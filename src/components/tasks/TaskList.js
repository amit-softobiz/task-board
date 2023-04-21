import React, { useRef, useState, useEffect } from "react";
import Card from "../UI/Card";
import classes from "./TaskList.module.css";
import Button from "../UI/Button";
const TaskList = (props) => {
  const statusInputRef = useRef();
  const [check, setCheck] = useState(false);
  const [status, setStatus] = useState("All");
  const [filteredData, setFilteredData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    setOriginalData(props.tasks);
  }, [props.tasks]);

  const filterStatusHandler = (event) => {
    const statusref = statusInputRef.current.value;
    setStatus(statusref);
    setCheck(true);
  };
  useEffect(() => {
    if(status !== "All"){
      const filtered = originalData.filter(
        (item) => item.status === status
      );
      setFilteredData(filtered);
    }
    else{
      setFilteredData(originalData)
    }
  }, [status])
  const handleDelete = (id) => {
    const updatedTasks = originalData.filter((task) => task.id !== id);
    setOriginalData(updatedTasks);
    setFilteredData(updatedTasks);
  };
  const handleUpdate = (id) =>{
    // const updateTask = originalData.filter((task) => task.id === id);
    props.onUpdateTask(id);

  }

  return (
    <Card className={classes.tasks}>
      <select
        id="status"
        value={status}
        onChange={filterStatusHandler}
        ref={statusInputRef}
      >
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="In Progress">In Progress</option>
        <option value="Complete">Complete</option>
      </select>

      {check ? (
        <ul key={props.id}>
          {filteredData.map((task) => (
            <li key={task.id}>
              <b>{task.title}</b> {task.status} {task.description} {task.date}{" "}
              <Button onClick={() => handleUpdate(task.id)}>update</Button>{" "}
              <Button onClick={() => handleDelete(task.id)}>remove</Button>
            </li>
          ))}
        </ul>
      ) : (
        <ul key={props.id}>
          {originalData.map((task) => (
            <li key={task.id}>
              <b>{task.title}</b> {task.status} {task.description} {task.date}{" "}
              <Button onClick={() => handleUpdate(task.id)}>update</Button>{" "}
              <Button onClick={() => handleDelete(task.id)}>remove</Button>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default TaskList;
