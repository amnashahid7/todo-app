import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard';

// const TaskManager = () => {
//   const [tasks, setTasks] = useState(() => {
//     const storedTasks = localStorage.getItem('tasks');
//     return storedTasks ? JSON.parse(storedTasks) : { todo: [], doing: [] };
//   });

//   // Save tasks to local storage whenever they change
//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }, [tasks]);

//   // Function to add a new task to a specified column (todo or doing)
//   const addTask = (columnId, newText) => {
//     setTasks((prevTasks) => ({
//       ...prevTasks,
//       [columnId]: [...prevTasks[columnId], newText],
//     }));
//   };

//   // Function to delete a task
//   const deleteTask = (columnId, index) => {
//     setTasks((prevTasks) => ({
//       ...prevTasks,
//       [columnId]: prevTasks[columnId].filter((_, i) => i !== index),
//     }));
//   };

//   // Function to handle card activation
//   const setActiveCard = (columnId, index) => {
//     console.log(`Active card in ${columnId} at index ${index}`);
//   };

//   return (
//     <div>
//       <h2>Todo</h2>
//       {tasks.todo.map((text, index) => (
//         <TaskCard
//           key={index}
//           title={text}
//           index={index}
//           columnId="todo"
//           setActiveCard={(index) => setActiveCard('todo', index)}
//           handleDelete={(index) => deleteTask('todo', index)}
//         />
//       ))}
//       <button onClick={() => addTask('todo', 'New Todo Task')}>Add New Todo</button>

//       <h2>Doing</h2>
//       {tasks.doing.map((text, index) => (
//         <TaskCard
//           key={index}
//           title={text}
//           index={index}
//           columnId="doing"
//           setActiveCard={(index) => setActiveCard('doing', index)}
//           handleDelete={(index) => deleteTask('doing', index)}
//         />
//       ))}
//       <button onClick={() => addTask('doing', 'New Doing Task')}>Add New Doing</button>
//     </div>
//   );
// };

// export default TaskManager;