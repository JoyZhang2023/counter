import React, { useState } from 'react';

export default function Counter () {
    const [count, setCount] = useState(0);

    const incrementTwice = ()=> { //false example of increment the count by 2
        setCount(count +1);
        setCount(count +1);
    }

    return (
        <div>
            <h1>The count currently is {count}</h1>
            <button onClick={() => setCount(count +1)}>
                Increment
            </button> <br></br>
            <button onClick={() => { //increase count by 1 after 2 seconds
                setTimeout(()=> {
                    },2000);  
                setCount(count+1)}
            }> 
                Increment After Delay
            </button> <br></br>
            <button onClick={incrementTwice}> 
                Increment Twice
            </button> <br></br>
            <button onClick={()=> setCount(count+2)}>
                Correct Increment Twice
            </button>
        </div>
    );
}