import { combineReducers } from "redux";
import appReducer from "./appReducer";
import taskReducer from "./taskReducer";
import axios from "axios";
import { LOAD_TASK } from "../actionTypes";

export async function fetchTask(dispatch, getState) {
  const response = await axios.get("http://localhost:5000/tasks");

  dispatch({ type: LOAD_TASK, payload: response.data });
}

export default combineReducers({ appReducer, taskReducer });
