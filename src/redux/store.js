import { createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers/index";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleWare));

export default createStore(reducer, composedEnhancer);
