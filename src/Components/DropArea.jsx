import React, { useState } from 'react';
import '../Assets/Css/DropAreaStyle.css'

const DropArea = ({ onDrop }) => {
    const [showArea, setShowArea] = useState(false);
    return (
        <section className={showArea ? 'drop_area' : 'hide_area'} onDrop={() => { onDrop(); setShowArea(false) }}
            onDragEnter={() => setShowArea(true)} onDragLeave={() => setShowArea(false)}
            onDragOver={(e) => e.preventDefault()}
        >
            Drop Area
        </section>
    )
}

export default DropArea;

