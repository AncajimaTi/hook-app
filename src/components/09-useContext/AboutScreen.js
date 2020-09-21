import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const AboutScreen = () => {
    console.log("About")

    const { user, setuser } =useContext(UserContext);
    
    const handlesalir=()=>{
        setuser({});
    }

    return (
        <div>
            <h1>AboutScreen</h1>
            <hr />
            <pre>
                {JSON.stringify(user,null,3)}
            </pre>
            <button className="btn btn-warning" 
                onClick={handlesalir}>Salir</button>
        </div>
    )
}

export default AboutScreen
