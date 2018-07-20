import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <div className="ui top fixed menu">
                <div className = "right menu">
                <a className="item">Login</a>
                <a className="item">Sign Up</a>
                </div>
            </div>            
        );
    }
}

export default NavBar;