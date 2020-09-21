import React, { useState } from 'react'
import AppRouter from './AppRouter'
import { UserContext } from './UserContext'


// npm install react-router-dom
const MainApp = () => {
    // const user={
    //     id:1234,
    //     name:'Fernando',
    //     email:'fernando.herrera@gmail.com'
    // }
    
    const [user, setuser] = useState({})


    return (
        <UserContext.Provider value={{
            user,
            setuser,
            temporal:1234   
        }}>
            <AppRouter />
        </UserContext.Provider>
        
       
    )
}

export default MainApp
