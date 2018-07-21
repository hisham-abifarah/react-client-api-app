 // import React, { Component } from 'react'; // changed to:
import React from 'react';
import PropTypes from "prop-types";
 // added to use Routes
import { Route } from 'react-router-dom'; 
import HomePage from './components/pages/HomePage'; // import homepage from pages component
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
 // import logo from './logo.svg';
 // import './App.css';
 // App component is like a routerdispatcher:renders depending on route so we add Routes inside App()

const App = ({location}) =>  (
    <div className= "ui container"> 
    <Route location = {location} path = "/" exact component = {HomePage}/>
    <GuestRoute location = {location}  path = "/login" exact component = {LoginPage}/>
    <UserRoute location = {location} path = "/dashboard" exact component = {DashboardPage}/>
</div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default App;