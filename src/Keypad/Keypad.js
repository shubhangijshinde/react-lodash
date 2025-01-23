import React, { useEffect, useRef, useState } from 'react'

function Keypad() {
    const [value, setValue] = useState('');
    const [counter, setCounter] = useState(0);
    const [keyIndex, setKeyIndex] = useState(0);
    const [appendChar, setAppendChar] = useState(false);

    let delay = 1000;

    let lastExecutionTime = useRef(0);

    let arr = new Array(9).fill(0);
    let keys = new Map([
        [1, [1]],
        [2, ['a', 'b', 'c', 2]],
        [3, ['d', 'e', 'f', 3]],
        [4, ['g', 'h', 'i', 4]],
        [5, ['j', 'k', 'l', 5]],
        [6, ['m', 'n', 'o', 6]],
        [7, ['p', 'q', 'r', 's', 7]],
        [8, ['t', 'u', 'v', 8]],
        [9, ['w', 'x', 'y', 'z', 9]]
    ])

    const handlePress = (key) => {
        let keyArray = keys.get(keyIndex);
        setKeyIndex(key);
        const currentTime = Date.now();
        if (currentTime - lastExecutionTime.current >= delay) {
            lastExecutionTime.current = currentTime;
            setAppendChar(true);
            setCounter(0);
        }
        else {
            if(counter >= keyArray.length) {
                setCounter(0);
            } else {
                setCounter(counter+1);
            }
            setAppendChar(false);
        }
    }

    useEffect(() => {
        let keyArray = keys.get(keyIndex);
        if(keyArray !== undefined && counter < keyArray.length) {
            console.log(`Keys : ${keyArray} => counter: ${counter}`);

            let str = value.slice(0, -1)
            setValue(value+keyArray[counter]);
            // if(appendChar) {
            //     setValue(value+keyArray[counter]);
            // }
            // else {
                
            // }
        }
    }, [counter])

    useEffect(() => {
        setCounter(0);
    }, [keyIndex])

    return (
        <div style={{ border: '1px solid gray', padding: '30px', margin: '40px'}}>
            <input 
                style={{ padding: '10px', margin:'30px'}}
                type="text"
                value={value}
                placeholder="Type something..." />
            <div>
                {arr.map((item, index) => 
                    <button 
                        key={index}
                        style={{width: '70px', height: '50px', padding: '5px', backgroundColor: 'lightgray', border: '1px solid gray', borderRadius:'5px', marginRight: '20px'}} 
                        type="button" 
                        onClick={() => handlePress(index+1)}> 
                        {keys.get(index+1).map((key) => (typeof key === 'string' ? key.toUpperCase() : key))}  
                    </button>
                )}
            </div>
            <button 
                key={"clear"}
                style={{width: '70px', height: '50px', padding: '5px', backgroundColor: 'lightgray', border: '1px solid gray', borderRadius:'5px', marginRight: '20px'}} 
                type="button" 
                onClick={() => setValue('')}> clear
            </button>
        </div>
    )
}

export default Keypad
