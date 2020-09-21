import React, { useLayoutEffect, useRef, useState } from 'react'
import useContar from '../../hooks/useContar';

import useFetch from '../../hooks/useFetch'
import './Layout.css'
const Layout = () => {
    const {counter,increment} = useContar(1);
    //console.log(counter);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote} = !!data && data[0]
   // console.log(quote,author);
    const pTag = useRef();
    const [boxsize, setboxsize] = useState({})

   useLayoutEffect(()=>{
       console.log(pTag.current.getBoundingClientRect());
       setboxsize(pTag.current.getBoundingClientRect());
   },[quote]);


    return (
        <>
            <h1>BreakingBad Quote(Layout)</h1>
            <hr/>
    
                    <blockquote className="blockquote text-right">
                    <p className="mb-0"
                        ref={pTag}
                        >{quote}
                         </p>
                    
                    </blockquote>   
                    <pre>{JSON.stringify(boxsize,null,3)}</pre>

                <button 
                className="btn btn-primary"
                onClick={increment}
                >Siguiente Quote</button>
           
          
        </>
    )
}

export default Layout
