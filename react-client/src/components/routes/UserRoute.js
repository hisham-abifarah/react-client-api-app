import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

//  UserRoute will take anything we pass to route 
//  component : react components
//  all the rest will be in ...rest variable
const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
  // all props passed to Route will be in ...rest
    {...rest} 
    render={props =>
        // if authenticated we render component, else redirect to home
      isAuthenticated ? <Component {...props} /> : <Redirect to="/" />}
  />
);

UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps)(UserRoute);