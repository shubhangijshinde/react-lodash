import React, { useState, useEffect } from 'react'

function MemoizedOutput() {

    const [inputValue, setInputValue] = useState();
    const [result, setResult] = useState(0);
    // const [febonacciValue, setFebonacciValue] = useState(0);
    let cache = new Map();

    const memoize = (callback) => {
        return (...args) => {
            const key = JSON.stringify(...args);
            console.log("size1 : ", cache.size);

            if (cache.has(key)) {
                console.log("Fetching from cache:", key);
                return cache.get(key);
            } else {
                console.log("Calculating result for:", key);
                const fact = callback(...args);
                cache.set(key, fact);

                // cache.forEach((value, key) => {
                //     console.log(`${key} = ${value}`);
                // });

                return fact;
            }
        }
    }

    const memoizedFactorial = memoize(factorial);

    const handleClick = () => {
        console.log("Factorial : ", memoizedFactorial(inputValue));
        // cache.forEach((value, key) => {
        //     console.log(`${key} = ${value}`);
        // });
        // setFebonacciValue(memoizedFibonacci(inputValue));
    }

    function factorial(n) {
        // if (n === 0) return 1;
        // return n * factorial(n - 1);
        if (n < 0) return "Factorial not defined for negative numbers"; // Handle negative input
        let result = 1;

        for (let i = 1; i <= n; i++) {
            result *= i; // Multiply result by the current number
        }

        return result;
    }

    // function fibonacci(n) {
    //     if (n <= 1) return n;
    //     return n + fibonacci(n - 1);
    // }
    // const memoizedFibonacci = memoize(fibonacci);


    return (
        <div style={{ border: '1px solid gray', padding: '30px', margin: '40px'}}>
            <h2 style={{paddingTop: '30px'}}>Memoize the output</h2>
            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something..."
            />
            <button style={{width: '100px', height: '40px', padding: '5px', backgroundColor: 'lightgray', border: '1px solid gray', marginLeft: '20px'}} type="button" onClick={handleClick}>Factorial</button>
            <p style={{fontSize: '20px', fontWeight: 500}}>Factorial value: {result}</p>
            {/* <p style={{fontSize: '20px', fontWeight: 500}}>fibonacci value: {febonacciValue}</p> */}
        </div>
    )
}

export default MemoizedOutput
