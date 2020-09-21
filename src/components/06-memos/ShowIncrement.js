import React from 'react'

const ShowIncrement = React.memo(({increment}) => {

    console.log("ME volvi a generar :(")
    return (
        <div>
            <button className="btn btn-primary"
                    onClick={()=>{
                       // increment();
                       increment(5);
                    }}>

                    incrementar
            </button>
        </div>
    )
})

export default ShowIncrement
