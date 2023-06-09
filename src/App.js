import React, { useState } from "react";
import Addtask from "./components/tasks/Addtask";
import "./assets/styles/styles.css";
import TaskList from "./components/tasks/TaskList";
const data = [
  {
    title: "TodayTask",
    status: "Active",
    description: "change pic 1",
    date: "2022-12-03",
    id: "0.40440185400075945",
  },
  {
    title: "YesterdayTask1",
    status: "In Progress",
    description: "change pic 2",
    date: "2022-12-07",
    id: "0.36516597617529545",
  },
  {
    title: "YesterdayTask1",
    status: "Complete",
    description: "change pic 3",
    date: "2022-12-02",
    id: "0.7633388012606279",
  },
  {
    title: "TodaysNewTask",
    status: "Active",
    description: "change pic 4",
    date: "2022-12-07",
    id: "0.18992885135013093",
  },
];
function App() {
  const [taskList, setTaskList] = useState(data);
  const [updatetask, setupdateTask] = useState();
  const [id, setId] = useState();

  const addTaskHandler = (Ttitle, Tstatus, Tdescription, Tdate) => {
    setTaskList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          title: Ttitle,
          status: Tstatus,
          description: Tdescription,
          date: Tdate,
          id: Math.random().toString(),
        },
      ];
    });
  };
  const updateTaskHandler = (Utitle, Ustatus, Udescription, Udate) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
    setTaskList((prevUsersList) => {
      return [
        {
          title: Utitle,
          status: Ustatus,
          description: Udescription,
          date: Udate,
          id: Math.random().toString(),
        },
        ...prevUsersList
      ];
    });
  };
  const getupdatedData = (id) => {
    setId(id);
    const updateTask = taskList.filter((task) => task.id === id);
    setupdateTask(updateTask[0]);
  };
  return (
    <div>
      <Addtask
        onAddTask={addTaskHandler}
        updateddata={updatetask}
        onGetupdatedata={updateTaskHandler}
      />
      <TaskList tasks={taskList} onUpdateTask={getupdatedData} />
    </div>
  );
}

export default App;
