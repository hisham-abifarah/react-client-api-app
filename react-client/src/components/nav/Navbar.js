import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component{
    render(){
        return(
            <div className="ui top fixed menu">
                <div className = "right menu">
                <Link to ="/login">Login</Link>
                <Link to ="/signup">Sign Up</Link>
                {/* <a className="item">Login</a>
                <a className="item">Sign Up</a> */}
                </div>
            </div>            
        );
    }
}

export default NavBar;