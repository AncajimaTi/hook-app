import React from 'react'
import useContar from '../../hooks/useContar';

import useFetch from '../../hooks/useFetch'
import '../02-useEffect/effects.css'
const MultipleCustomHooks = () => {
    const {counter,increment} = useContar(1);
    //console.log(counter);

    const {loading,data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote , author} = !!data && data[0]
   // console.log(quote,author);
    return (
        <>
            <h1>BreakingBad Quote</h1>
            <hr/>
            { loading?
                (
                    <div className="alert alert-info text-center">
                        Loading...
                     </div> 

                )
                :
                (
                    <blockquote className="blockquote text-right">
                    <p className="mb-0">{quote} </p>
                <footer className="blockquote-footer">{author}</footer>
                    </blockquote>   
                )}

                <button 
                className="btn btn-primary"
                onClick={increment}
                >Siguiente Quote</button>
           
          
        </>
    )
}

export default MultipleCustomHooks
