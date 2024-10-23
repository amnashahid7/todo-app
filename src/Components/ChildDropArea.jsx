import React, { useState } from 'react';
import '../Assets/Css/DropAreaStyle.css'

// const ChildDropArea = ({ handleDrop }) => {
//     const [showChildArea, setShowChildArea] = useState(false);
//     return (
//         <section className={showChildArea ? 'drop_area' : 'hide_area'} onDropChild={() => { handleDrop(); setShowChildArea(false) }}
//             onDragEnter={() => setShowChildArea(true)} onDragLeave={() => setShowChildArea(false)}
//             onDragOver={(e) => e.preventDefault()}
//         >
//             Drop Area child child
//         </section>
//     )
// }

// export default ChildDropArea;


const ChildDropArea = ({ onDropChild, dropIdx, index }) => {
    const [isOver, setIsOver] = useState(false);

    const handleDragEnter = () => {
        setIsOver(true);
    };

    const handleDragLeave = () => {
        setIsOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsOver(false);
        onDropChild(index); // Call onDropChild with the current index
        console.log("drop");
        onDropChild(dropIdx); // Pass the drop index to the parent handler
    };

    return (
        <div
            className={`child_drop_area ${isOver ? 'over' : ''}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={(e) => e.preventDefault()} // Necessary for allowing the drop
            onDrop={handleDrop}
        >
            Drop here
        </div>
    );
};

export default ChildDropArea;