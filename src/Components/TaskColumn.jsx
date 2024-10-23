import React from 'react'
import "../Assets/Css/TaskColumnStyle.css";
import TaskCard from './TaskCard';
import icon from '../Assets/images/delete.png';
import DropArea from './DropArea';

const TaskColumn = ({ headingTitle, icon, tasks, status, handleDelete, setActiveCard, onDrop }) => {
    const handleDrop = (columnId, taskIndex, dropIndex) => {
        console.log(`Dropping item from column ${columnId} at task index ${taskIndex} to new index ${dropIndex}`);
        if (taskIndex === undefined || dropIndex === undefined || taskIndex === null) return (console.log("err"));

        const taskToMove = tasks[taskIndex];
        const updatedTasks = tasks.filter((task, index) => index !== taskIndex);
        updatedTasks.splice(dropIndex, 0, {
            ...taskToMove,
            status: columnId // Update status accordingly
        });
        console.log(`updated task ${updatedTasks}`)
        onDrop(updatedTasks);
    };
    return (
        <section className='task_column'>
            <h2 className='task_column_heading'>
                <img className='task_column_icon' src={icon} alt='' /> {headingTitle}
            </h2>
            <DropArea onDrop={() => onDrop(status, 0)} />
            {tasks.map(
                (task, index) =>
                    task.status === status && (
                        <React.Fragment key={index}>
                            <TaskCard

                                title={task.task}
                                tags={task.tags}
                                handleDelete={handleDelete}
                                index={index}
                                setActiveCard={setActiveCard}
                                columnId={status}
                                handleDrop={handleDrop}
                            />
                            <DropArea onDrop={() => onDrop(status, index + 1)} />

                        </React.Fragment>

                    )
            )}
        </section>
    );
}
export default TaskColumn;




