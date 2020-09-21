import { useState } from 'react';


const useContar = (initialState=10) => {
    const [counter, setcounter] = useState(initialState);
    const increment=()=>{
        setcounter( counter + 1);
    }
    const decrement=()=>{
        setcounter( counter - 1);
    }
 
    const reset=()=>{
        setcounter( initialState );
    }
    return{
        counter,
        increment,
        decrement,
        reset
    }
}

export default useContar
