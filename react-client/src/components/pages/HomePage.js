// check sublime shortcut for adding function component
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../nav/Navbar";
import * as actions from "../../actions/auth";

 // userloggedin means we have redux state with user record with token
 // isAuthenticated is deconstructed in const HomePage, reason: instead of using props then props.isAuthenticated we deconstruct it and use it directly
const HomePage = ({ isAuthenticated, logout }) => (
    <div className="ui container">
    <Navbar/>
    <br/><br/>
      <h1>Home Page</h1>
      {/* if authenticatd button logout else link to login */}
      {/* onlogout click we dispatch logout thunk action which is found in auth.js*/}
      {isAuthenticated ? ( 
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <div>
          <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </div>
  );

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
  };
  
  function mapStateToProps(state) {
    return {
      isAuthenticated: !!state.user.token // isAuthenticated is one of the props available on the home page (if token undefined: isAuthenticaed false, else true)
    };
  }


 // mapstatetoprops
export default connect(mapStateToProps, { logout: actions.logout })(HomePage);