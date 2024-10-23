import React, { useEffect, useState } from 'react';
import deleteicon from '../Assets/images/delete.png';


// const ChildCompo = ({ showInput, toggleInput, setIsChildDragging,  ids }) => {

//     const [inputValue, setInputValue] = useState('');
//     const [draggedIndex, setDraggedIndex] = useState(null);
//     const [texts, setTexts] = useState(() => {
//         const storedTexts = localStorage.getItem("texts");
//         return storedTexts ? JSON.parse(storedTexts) : [];
//     });
//     useEffect(() => {
//         localStorage.setItem("texts", JSON.stringify(texts));
//     }, [texts]);

//     const handleInputChange = (e) => {
//         setInputValue(e.target.value);
//         console.log(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (inputValue.trim()) {
//             setTexts((prevTexts) => [...prevTexts, inputValue]);
//             setInputValue('');
//             toggleInput();
//         }
//     };

//     const handleClear = (idx) => {
//         setTexts((prevTexts) => prevTexts.filter((_, i) => i !== idx));
//     };

//     const handleDragStart = (index) => {
//         setDraggedIndex(index);
//         setIsChildDragging(true);
//     };

//     const handleDragOver = (e) => {
//         e.preventDefault();
//     };

//     const handleDrop = (index) => {
//         if (draggedIndex !== null) {
//             const newTexts = [...texts];
//             const draggedItem = newTexts.splice(draggedIndex, 1)[0];
//             newTexts.splice(index, 0, draggedItem);
//             setTexts(newTexts);
//         }
//         setDraggedIndex(null);
//         setIsChildDragging(false);
//     };

//     return (
//         <>
//             {texts.map((x, idx) => (
//                 <div
//                     key={idx}
//                     className='submitted-text'
//                     style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
//                     draggable
//                     onDragStart={() => handleDragStart(idx)}
//                     onDragOver={handleDragOver}
//                     onDrop={() => handleDrop(idx)}
//                     onDragEnd={() => setIsChildDragging(false)}
//                 >
//                     <span>{x}</span>
//                     <ul>
//                         {/* Loop through the array and display each ID */}
//                         {ids.map((id, index) => (
//                             <li key={index}>{id}</li>
//                         ))}
//                     </ul>
//                     <button className='clear-button' onClick={() => handleClear(idx)}>
//                         <img src={deleteicon} className='delete_icon1' alt='Delete' />
//                     </button>
//                 </div>
//             ))}
//             {showInput && (
//                 <div className='input-container'>
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             className='input-container1'
//                             type='text'
//                             value={inputValue}
//                             onChange={handleInputChange}
//                             placeholder='Enter text'
//                             name='childText'
//                         />
//                         <button className='submitBtn' type='submit'>Submit</button>
//                     </form>
//                 </div>
//             )}
//         </>
//     );
// };
// export default ChildCompo;




const ChildCompo = ({ columnId, showInput, toggleInput, index }) => {
    const [inputValue, setInputValue] = useState('');
    const [texts, setTexts] = useState(() => {
        const storedTexts = localStorage.getItem(`texts_${columnId}_${index}`);
        return storedTexts ? JSON.parse(storedTexts) : [];
    });

    useEffect(() => {
        localStorage.setItem(`texts_${columnId}_${index}`, JSON.stringify(texts));
    }, [texts, columnId]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTexts((prevTexts) => [...prevTexts, inputValue]);
            setInputValue('');
            toggleInput();
        }
    };

    const handleClear = (idx) => {
        setTexts((prevTexts) => prevTexts.filter((_, i) => i !== idx));
    };

    const handleChildClick = (idx) => {
        console.log(`Clicked on child at index ${idx} ${columnId} ${index}`);
    };

    const handleDragStart = (e, idx) => {
        e.dataTransfer.setData('text/plain', idx);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDrop = (e, dropIdx) => {
        e.preventDefault();
        const draggedIdx = e.dataTransfer.getData('text/plain');
        const draggedText = texts[draggedIdx];
        const updatedTexts = texts.filter((_, i) => i !== draggedIdx);
        updatedTexts.splice(dropIdx, 0, draggedText);
        setTexts(updatedTexts);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="child_component">
                {texts.map((text, idx) => (
                    <div
                        key={idx}
                        className="submitted-text"
                        onClick={() => handleChildClick(idx)}
                        style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                        draggable
                        onDragStart={(e) => handleDragStart(e, idx)}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, idx)}
                    >
                        <span>{text}</span>
                        <button className="clear-button" onClick={() => handleClear(idx)}>
                            <img src={deleteicon} className="delete_icon1" alt="Delete" />
                        </button>
                    </div>
                ))}

                {showInput && (
                    <div className="input-container">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Enter text"
                                className='input-container1'
                            />
                            <button className='submitBtn' type="submit">Submit</button>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
};

export default ChildCompo;
