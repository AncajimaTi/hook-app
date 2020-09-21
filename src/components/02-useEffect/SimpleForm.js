import React, { useEffect,useState } from 'react';
import './effects.css';
import Message from './Message';
const SimpleForm = () => {

    const [formState, setformState] = useState({
        name:'',
        email:'',
    })

    const {name , email} = formState;

    useEffect(()=>{
        console.log('hey');
    },[])

    useEffect(()=>{
        console.log('Cambio FormState');
    },[formState])

    useEffect(()=>{
        console.log('Cambio email');
    },[email])


    const handleInputChange=({target})=>{
       
        setformState({
            ...formState,
            [target.name]:target.value
        })
    }

    return (
        <>
            <h1>UseEffect</h1>
            <hr />
            <div className="form-group">
                <input type="text" 
                        name="name" 
                        className="form-control" 
                        placeholder="Tu Nombre"
                        value={name}
                        onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <input type="text" 
                        name="email" 
                        className="form-control" 
                        placeholder="email@gmail.com"
                        value={email}
                        onChange={handleInputChange} />
            </div>
            {(name==='123') && <Message />}
        </>
    )
}

export default SimpleForm
