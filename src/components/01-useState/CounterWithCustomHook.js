import React from 'react'
import useCouter from '../../hooks/useCouter';
import './counter.css'

const CounterWithCustomHook = () => {
    const {state,increment,decrement,reset} = useCouter(100);


    return (
        <>
            <h1>Counter with hook:{ state }</h1>
            <hr />
            <button onClick={()=>increment(2)} class="btn"> +1 </button>
            <button onClick={reset}>Reset</button>
            <button onClick={()=>decrement(2)} class="btn"> -1 </button>
        </>
    )
}

export default CounterWithCustomHook
