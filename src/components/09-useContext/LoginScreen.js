import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const LoginScreen = () => {
    console.log("LoginScreen");

    const {setuser} = useContext(UserContext);
    
    const usuario={
        id:123,
        name:'Fernando'
    }
    

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button className="btn btn-primary"
                onClick={()=>setuser(usuario)}>Entrar</button>
        </div>
    )
}

export default LoginScreen
