import React, { useCallback, useEffect, useState } from 'react';
import '../02-useEffect/effects.css';
import ShowIncrement from './ShowIncrement';



const CallbackHook = () => {

    const [counter, setcounter] = useState(10);
   /* const increment =()=>{
        setcounter(counter + 1);
    }*/
   const increment = useCallback((numero) => {
            //setcounter(c=> c + 1);
            setcounter(c=> c + numero)
        },[setcounter])

      /*  useEffect(() => {
           
        }, [increment])
        */

    return (
        <div>
            <h1>CallbackHook {counter}</h1>
            <hr />
            <ShowIncrement increment={ increment}/>
        </div>
    )
}

export default CallbackHook
