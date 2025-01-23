import React, { useEffect, useState } from 'react'
import './debounce.css';

function Debounce({ delay = 500 }) {
    const [counter, setCounter] = useState(0);
    const [debouncedCount, setDebouncedCount] = useState(0);

    // Effect to debounce the counter value
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedCount(counter);
        }, delay);

        // Cleanup function to clear timeout
        return () => {
            clearTimeout(handler);
        };
    }, [counter, delay]);

    return (
        <div style={{ border: '1px solid gray', padding: '30px', margin: '40px'}}>
            <h2>Debounce</h2>
            <p style={{fontSize: '20px', fontWeight: 500}}>Immediate Count: {counter}</p>
            <p style={{fontSize: '20px', fontWeight: 500}}>Debounced Count: {debouncedCount}</p>
            <button style={{width: '100px', height: '40px', padding: '5px', backgroundColor: 'lightgray', border: '1px solid gray', marginRight: '20px'}} type="button" onClick={() => setCounter(counter+1)}> + Add  </button>
            <button style={{width: '100px', height: '40px', padding: '5px', backgroundColor: 'lightgray', border: '1px solid gray', marginLeft: '20px'}} type="button" onClick={() => setCounter(counter-1)}>  - Subtract  </button>
        </div>
    )
}

export default Debounce;
