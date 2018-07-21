import React from 'react';
import ReactDOM from 'react-dom';
 // added
import { BrowserRouter , Route } from "react-router-dom"; 
 // import './index.css';
import 'semantic-ui-css/semantic.min.css';

  // should import the following and use them in a seperate file
  // createStore function: creates store redux, most important redux
  // applyMiddleware function: allows to use thunk middleware
 import { createStore , applyMiddleware } from 'redux';
 //  Provider: connect redux and react
 import { Provider } from 'react-redux';
 import thunk from 'redux-thunk';
 import { composeWithDevTools } from 'redux-devtools-extension';
 import App from './App';
 import rootReducer from "./rootReducer";
 import registerServiceWorker from './registerServiceWorker';
 import { userLoggedIn } from "./actions/auth";

  // create Store
  // rootreducer : whole state object  
  const store = createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(thunk))
  );

   // if true we want to dispatch userloggedin action, have to have user first
  if (localStorage.userJWT) {
    const user = {
      token: localStorage.userJWT
    };
    store.dispatch(userLoggedIn(user));
  }

ReactDOM.render(
    <BrowserRouter>
        <Provider store = {store}>
             {/* problem with updateblockers
            when we use react redux connect, will have conflict with react router  
            so we pass to each route location (passed in app.js)
            Route: high order component  , render app component and pass history,location etc.. to it */}
            <Route component={App}/> 
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();