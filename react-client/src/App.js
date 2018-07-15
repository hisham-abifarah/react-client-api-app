 // import React, { Component } from 'react'; // changed to:
import React from 'react';
 // added to use Routes
import { Route } from 'react-router-dom'; 
import HomePage from './components/pages/HomePage'; // import homepage from pages component
import LoginPage from './components/pages/LoginPage';
 // import logo from './logo.svg';
 // import './App.css';
 // App component is like a routerdispatcher:renders depending on route so we add Routes inside App()

const App = () => <div> 
    <Route path = "/" exact component = {HomePage}/>
    <Route path = "/login" exact component = {LoginPage}/>
</div>;

 // class App extends Component {
 //   render() {
 //     return (
 //       <div className="App">
 //         <header className="App-header">
 //           <img src={logo} className="App-logo" alt="logo" />
 //           <h1 className="App-title">Welcome to React</h1>
 //         </header>
 //         <p className="App-intro">
 //           To get started, edit <code>src/App.js</code> and save to reload.
 //         </p>
 //       </div>
 //     );
 //   }
 // }

export default App;