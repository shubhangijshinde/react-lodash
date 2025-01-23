import React, { useEffect, useState, useRef } from 'react'

function Throttle({ delay = 500 }) {

    const [inputValue, setInputValue] = useState('');
    const [throttledValue, setThrottledValue] = useState('');
    const lastExecutionTime = useRef(0);

    // Throttle handler to manage the onChange event
    const handleInputChange = (value) => {
        const currentTime = Date.now();
        if (currentTime - lastExecutionTime.current >= delay) {
            setThrottledValue(value);
            console.log("value :", value);
            lastExecutionTime.current = currentTime;
        }
    };

    useEffect(() => {
        // Trigger throttled function when inputValue changes
        handleInputChange(inputValue);
    }, [inputValue]);

    return (
        <div style={{ border: '1px solid gray', padding: '30px', margin: '40px'}}>
            <h2 style={{paddingTop: '30px'}}>Throttle</h2>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something..."
            />
            <p style={{fontSize: '20px', fontWeight: 500}}>Throttle input: {throttledValue}</p>
        </div>
    )
}

export default Throttle;
