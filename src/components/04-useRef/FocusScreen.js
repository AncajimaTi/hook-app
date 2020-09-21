import React,{useRef} from 'react';
import '../02-useEffect/effects.css';
const FocusScreen = () => {
    const inputRef = useRef();
    //console.log(ref);
    const handleclick=()=>{
        //primera forma seleccionar el input
        //document.querySelector('input').select();
        //segunda forma de seleccionar el input (usando el useRef)
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />
            <input 
                ref={inputRef}
                className="form-control"
                placeholder="su nombre"/>

            <button className="btn btn-outline-primary mt-5"
                    onClick={handleclick}>
                    Focus
            </button>
        </div>
    )
}

export default FocusScreen
