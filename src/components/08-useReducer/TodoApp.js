import React, { useEffect, useReducer } from 'react';
//import useForm from '../../hooks/useForm';
import './styles.css';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import { todoReducer } from './todoReducer';

const TodoApp = () => {
    /*const initialState=[{
         id:new Date().getTime(),
         desc:'Aprender React',
         done:false
        }];*/
    

    const init=()=>{
        // return [{
        //     id:new Date().getTime(),
        //     desc:'Aprender React',
        //     done:false
        //    }]
        return JSON.parse(localStorage.getItem('todos')) || []
    }

   

    const [todos,dispatch] = useReducer(todoReducer, [],init);
        
    // const [{descripcion},handleInputChange,reset]=useForm({
    //                                         descripcion:'',
    //                                     })
    
    
    
                                        useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])

    const handleDelete=(id)=>{
        const action ={
            type:'delete',
            playload:id
        }
        dispatch(action);

    }

    const handleToggle=(todoid)=>{
        dispatch({
            type:'toggle',
            playload:todoid
        })
    }

    const handleAddTodo=(newTodo)=>{
        dispatch({
            type:'add',
            playload:newTodo
        });
      

        
    }

    // const handleSubmit =(e)=>{
    //     // e.preventDefault();
    //     // if(descripcion.trim().length<=1){
    //     //     return ;
    //     //  }
    //         const newTodo={
    //             id:new Date().getTime(),
    //             desc:descripcion,
    //             done:false
    //         }

    //        /* const action ={
    //             type:'add',
    //             playload:newTodo
    //         }

    //         dispatch(action);*/
    //         reset();
    // }
    

    return (
        <div>
            <h1>TodoApp({todos.length})</h1>
            <hr />
                <div  className="row">
                        <div className="col-7">
                           
                                <TodoList todos={todos} handleToggle={handleToggle}  handleDelete={handleDelete} />
                                {/*
                                    todos.map((todo,i)=>(
                                    <li key={todo.id} 
                                        className="list-group-item">
                                        <p className={`${todo.done&&'complete'}`}
                                            onClick={()=>handleToggle(todo.id)}
                                            >{i+1}. {todo.desc}</p>
                                        <button className="btn btn-danger"
                                             onClick={(e)=>handleDelete(todo.id)}>Borrar</button>
                                    </li>
                                    ))*/
                                }
                            
                        </div>
                        <div className="col-5">
                            <TodoAdd handleAddTodo={handleAddTodo}/>
                              {/* 
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
                              */}  
                        </div>

                </div>
              

        </div>
    )
}

export default TodoApp
