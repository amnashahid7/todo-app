import React, { useEffect, useState } from 'react'
import '../Assets/Css/TaskCardStyle.css'
import Btn from './btn';
import deleteicon from '../Assets/images/delete.png';
import ChildCompo from './ChildCompo';
import ChildDropArea from './ChildDropArea';



const TaskCard = ({ title, tags, handleDelete, index, setActiveCard, columnId, handleDrop }) => {
    const [showInput, setShowInput] = useState(false);


    const toggleInput = () => {
        setShowInput((prevState) => !prevState);
    };

    const handleDragStart = () => {

        setActiveCard(index);

    };

    const childId = `child_${index}`;

    return (
        <article
            className="task_card"
            draggable
            onDragStart={handleDragStart}
            onDragEnd={() => setActiveCard(null)}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4 className="task_text">{title} --{columnId}</h4>
                <button className="addDiv" onClick={toggleInput}>
                    {showInput ? '-' : '+'}
                </button>
            </div>

            <div className="task_card_bottom_line">
                <div className="task_card_tags">
                    {tags && tags.map((tag, idx) => (
                        <Btn key={idx} tagName={tag} selected />
                    ))}
                </div>

                {/* Pass the columnId to ChildCompo */}
                <React.Fragment >
                    <ChildCompo
                        columnId={columnId}
                        showInput={showInput}
                        toggleInput={toggleInput}
                        index={index}


                    />
                    {/* <ChildDropArea onDropChild={() => handleDrop(status, index + 1)} /> */}
                    <ChildDropArea
                        onDropChild={(dropIndex) => handleDrop(columnId, dropIndex)}
                        index={index}
                    />
                </React.Fragment>

                <div className="task_card_delete" onClick={() => handleDelete(index)}>
                    <img src={deleteicon} className="delete_icon" alt="Delete" />
                </div>
            </div>
        </article>
    );
};

export default TaskCard;




