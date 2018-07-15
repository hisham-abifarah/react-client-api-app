// define thunk action, just a function that returns another function
import { USER_LOGGED_IN , USER_LOGGED_OUT } from "../types";
import api from "../api";

export const userLoggedIn = user => ({
    type:USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});


 // logout thunk action
export const logout = () => dispatch => {
  localStorage.removeItem("userJWT");
  dispatch(userLoggedOut());
};

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.userJWT = user.token // save token into localstorage when we log in; 
    dispatch(userLoggedIn(user)); // dispatch userloggout action and catch it in user reducer and set it to empt
  });