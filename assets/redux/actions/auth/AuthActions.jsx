import {
  AUTH_LOG_USER,
  AUTH_LOG_OUT_USER
} from "../ActionTypes";

export const loginUser = data => ({ type: AUTH_LOG_USER, payload: data });
export const logoutUser = data => ({ type: AUTH_LOG_OUT_USER, payload: data });

