 // reducer is a function that takes states and actions and returns new state
import { USER_LOGGED_IN, USER_LOGGED_OUT  } from "../types";

 export default function user (state={}, action = {}){
    switch (action.type){
        case USER_LOGGED_IN :
            return action.user; // return new state
        case USER_LOGGED_OUT :
            return {};

        default : return state;
    }
 }