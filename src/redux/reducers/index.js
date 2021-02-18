import { combineReducers } from "redux";
import appReducer from "./appReducer";
import taskReducer from "./taskReducer";

export default combineReducers({ appReducer, taskReducer });
