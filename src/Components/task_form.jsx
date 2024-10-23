import React, { useState } from 'react'
import "../Assets/Css/TaskFormStyle.css";
import Btn from './btn';


const TaskForm = ({ setTasks }) => {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: [],
    });

    // console.log("Task Data :", taskData);

    const checkTag = (tag) => {
        return taskData.tags.some((item) => item === tag);
    };

    const selectTag = (tag) => {
        if (taskData.tags.some((item) => item === tag)) {
            const filterTags = taskData.tags.filter((item) => item !== tag);
            setTaskData((prev) => {
                return { ...prev, tags: filterTags };
            });
        } else {
            setTaskData((prev) => {
                return { ...prev, tags: [...prev.tags, tag] };
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setTaskData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskData);
        setTasks((prev) => {
            return [...prev, taskData];
        });
        setTaskData({
            task: "",
            status: "todo",
            tags: [],
        });
    };
    return (
        <header className="app_header">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="task"
                    value={taskData.task}
                    className="task_input"
                    placeholder="Enter your task"
                    onChange={handleChange}
                />

                <div className="task_form_bottom_line">
                    <div>
                        <Btn
                            tagName="HTML"
                            selectTag={selectTag}
                            selected={checkTag("HTML")}
                        />
                        <Btn
                            tagName="CSS"
                            selectTag={selectTag}
                            selected={checkTag("CSS")}
                        />
                        <Btn
                            tagName="JavaScript"
                            selectTag={selectTag}
                            selected={checkTag("JavaScript")}
                        />
                        <Btn
                            tagName="React"
                            selectTag={selectTag}
                            selected={checkTag("React")}
                        />
                    </div>

                    <div>
                        <select
                            name="status"
                            value={taskData.status}
                            className="task_status"
                            onChange={handleChange}
                        >
                            <option value="todo">To do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                        <button type="submit" className="task_submit">
                            + Add Task
                        </button>
                    </div>
                </div>
            </form>
        </header>
    );
};

export default TaskForm;