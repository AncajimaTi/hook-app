import React, { useState } from 'react'
import '../02-useEffect/effects.css';
import useContar from '../../hooks/useContar';
import Small from './Small';

const Memorize = () => {
    const {counter, increment} =useContar(10);
    const [show, setshow] = useState(true);
    
    return (
        <div>
            <h1>Counter: <Small value={counter} /></h1>
            <hr />
            <button className="btn btn-primary"
                    onClick={increment}>
                            +1
            </button>
            <button
                className="btn btn-outline-primary ml-3"
                onClick={()=>{
                    setshow(!show);
                }}
                >
                Show/Hide { JSON.stringify(show)}
            </button>
        </div>
    )
}

export default Memorize
