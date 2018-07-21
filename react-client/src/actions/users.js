import { userLoggedIn } from "./auth";
import api from "../api";

// if one export in file, lint message to use default export, but here will have more than one export so leave it

export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    localStorage.userJWT = user.token;
    dispatch(userLoggedIn(user)); // login user and their data after successful signup
  });