import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


 // todo : change appbar title according to which page user is on
const NavBar = () => {
    return(
        <div>
        <AppBar className="mainAppBar" position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                Home Page
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;



// import React from 'react';
// // import { Link } from "react-router-dom";

// class NavBar extends React.Component{
//     render(){
//         return(
//             <div className="ui top fixed menu">
//                 <div className = "right menu">
//                 {/* <Link to ="/login">Login</Link>
//                 <Link to ="/signup">Sign Up</Link> */}
//                 <a className="item">Login</a>
//                 <a className="item">Sign Up</a>
//                 </div>
//             </div>            
//         );
//     }
// }

// export default NavBar;