import React from 'react'
import useForm from '../../hooks/useForm'

const TodoAdd = ({handleAddTodo}) => {

     const [{descripcion},handleInputChange,reset]=useForm({
                                            descripcion:'',
                                       })
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(descripcion.trim().length<=1){
            return ;
         }

         const newTodo={
                    id:new Date().getTime(),
                    desc:descripcion,
                    done:false
                }

            handleAddTodo(newTodo);
            reset();
    }
    

    return (
        <>
             <h4>Agregar TODO</h4>
                                <hr />

                                <form onSubmit={handleSubmit}>
                                    <input
                                            type="text"
                                            name="descripcion"
                                            className="form-control"
                                            placeholder="Aprender ..."
                                            autoComplete="off"
                                            value={descripcion}
                                            onChange={handleInputChange}
                                            />
                                    <button
                                        type="submit"
                                        className="btn btn-outline-primary mt-1 btn-block"
                                       >
                                            Agregar
                                    </button>
                                </form>
        </>
    )
}

export default TodoAdd
