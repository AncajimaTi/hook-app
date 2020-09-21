import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({todos,handleDelete,handleToggle}) => {
    console.log(todos)
    return (

        <div>  
            <ul className="list-group list-group-flush">
                {
                    todos.map((todo,i)=>(
                        //TodoListItem,todo,index,handleDelete,handleToggle
                        <TodoListItem  key={todo.id}
                                        todo={todo} 
                                        index={i} 
                                        handleDelete={handleDelete}
                                        handleToggle={handleToggle}/>
                           ))
                
                }
              </ul>
        </div>
    )
}

export default TodoList
