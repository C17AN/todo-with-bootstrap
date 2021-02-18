import { ADD_MODE, SHOW_MODE } from "../actionTypes";

const initialState = {
  isAddMode: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MODE:
      return { ...state, isAddMode: true };
    case SHOW_MODE:
      return { ...state, isAddMode: false };

    default:
      return state;
  }
};

export default appReducer;
