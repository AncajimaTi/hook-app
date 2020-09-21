import React from 'react';
import {Link,NavLink} from 'react-router-dom';
const NavBar = () => {
    return (
    
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="/" className="navbar-brand" >UseContext</Link>
        
            <div className="collapse navbar-collapse" >
                <div className="navbar-nav">
                    <NavLink  to="/" exact activeClassName="active" className="nav-link" >Home</NavLink>
                    <NavLink  to="/about" exact activeClassName="active" className="nav-link" >About</NavLink>
                    <NavLink to="/login" exact activeClassName="active" className="nav-link" >Login</NavLink>
            
                </div>
            </div>
        </nav>
    

    )
}

export default NavBar


      /*
          <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/login">login</Link>
                    </li>
                </ul>
        </nav>
    
    
    */