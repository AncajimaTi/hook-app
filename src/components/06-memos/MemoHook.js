import React, { useMemo, useState } from 'react'
import '../02-useEffect/effects.css';
import useContar from '../../hooks/useContar';
import { procesoPesado } from '../helpers/procesoPesado';


const MemoHook = () => {
    const {counter, increment} =useContar(5000);
    const [show, setshow] = useState(true);
    
    
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />
            <p>{memoProcesoPesado}</p>

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

export default MemoHook
