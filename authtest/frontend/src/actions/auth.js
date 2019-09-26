import axios from "axios";
import { returnErrors } from "./messages";

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from "./types";

  // CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({ type: USER_LOADING });

    const token = getState().auth.token;
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if(token) {
        config.headers['Authorization']
    }
}