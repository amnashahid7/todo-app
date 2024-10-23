import React, { useEffect, useState } from 'react'
import "./Assets/Css/appStyle.css";
import TaskForm from './Components/task_form';
import TaskColumn from './Components/TaskColumn';
import todoicon from './Assets/images/direct-hit.png';
import doingicon from './Assets/images/glowing-star.png';
import doneicon from './Assets/images/check-mark-button.png';
import TaskCard from './Components/TaskCard';



const App = () => {
  const oldTasks = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [activeCard, setActiveCard] = useState(null);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);



  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  const onDrop = (status, position) => {
    console.log(`${status} and active card ${activeCard} and ${position}`);
    if (activeCard == null || activeCard === undefined) return;
    const taskToMove = tasks[activeCard];
    const updatedTask = tasks.filter((task, index) => index !== activeCard);
    updatedTask.splice(position, 0, {
      ...taskToMove,
      status: status
    })
    setTasks(updatedTask);
  };




  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          headingTitle="To do"
          icon={todoicon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}


        />

        <TaskColumn
          headingTitle="Doing"
          icon={doingicon}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}




        />
        <TaskColumn
          headingTitle="Done"
          icon={doneicon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}



        />
      </main>
      <h1>activeCard -{activeCard}</h1>

    </div>
  );
};

export default App;


