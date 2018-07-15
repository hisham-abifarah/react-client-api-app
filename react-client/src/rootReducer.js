 // combineReducuers : function help combine different reducers into one
import { combineReducers } from 'redux';
import user from "./reducers/user";


 //  result of combineReducers function
 //  user:  current user information , entity in redux store
 // reducer: funciton takes state, returns another state
export default combineReducers({
    user
})