import React, {useState} from 'react'
import Addtask from "./components/tasks/Addtask";

import TaskList from "./components/tasks/TaskList";
function App() {
  const [taskList, setTaskList] = useState([]);

  const addTaskHandler = (Ttitle,Tstatus,Tdescription,Tdate)=>{
    setTaskList((prevUsersList)=>{
      return [...prevUsersList, {title:Ttitle,status:Tstatus,description:Tdescription,date:Tdate ,id:Math.random().toString()}];
    });
  };
  return (
    <div>
      <Addtask onAddTask={addTaskHandler}/>
      <TaskList tasks={taskList}/>
    </div>
  );
}

export default App;
