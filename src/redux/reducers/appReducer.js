import { ADD_MODE, MOD_MODE, SHOW_MODE } from "../actionTypes";

const initialState = {
  isAddMode: false,
  isModMode: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MODE:
      return { ...state, isAddMode: true };
    case MOD_MODE:
      return { ...state, isModMode: true };
    case SHOW_MODE:
      return { isModMode: false, isAddMode: false };

    default:
      return state;
  }
};

export default appReducer;
