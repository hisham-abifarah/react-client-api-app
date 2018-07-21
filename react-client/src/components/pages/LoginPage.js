import React from "react";
import PropTypes from "prop-types";
 // connect this component to redux
import { connect } from "react-redux";
import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth";


 // page will render LoginForm
 // loginform take some function, guard date from form and pass data into this function
 // form doesnt know what will happen with data, it will pass it along only


 // const LoginPage = () => (
 //     <div className ="ui container">
 //         <h1>Login Page </h1>

 //         <LoginForm submit = {this.submit}/>
 //     </div>
 // );

class LoginPage extends React.Component{

    // submit = data =>{
    //     // dispatch thunk action with data
    //     // login thuhnk action pass data to it and it will return promise, if everything is okay we redirect to home page
    //     // to redirect we use history: passed to this component by react router cause this is a route component
    //     // login() will be available to us when we connect this component to redux
    //     this.props.login(data).then(() => this.props.history.push("/"));

    // };

    // submit = data =>{ this.props.login(data).then(() => this.props.history.push("/"));}; // < check why it caused error, this.props .catch error in loginform.js in onsubmit :https://stackoverflow.com/questions/46293268/react-js-typeerror-cannot-read-property-catch-of-undefined
    submit = data =>  this.props.login(data).then(() => this.props.history.push("/dashboard"));

    render(){
        return(
            <div className="ui container">
                <h1>Login Page </h1>

                <LoginForm submit={this.submit} />
            </div>
        );
    }
}

 // only define proptypes that our component needs , not whole history 
 // it expects history with push functions
 LoginPage.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
  };

  // connect login page
  // connect 1st param: map state props, pass data from redux state into this components
  // connect 2nd param: dispatched props, wrap functions in dispatch, that's why we can simply call dispatch this action
  export default connect(null, { login })(LoginPage);