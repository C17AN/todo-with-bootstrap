import { LOAD_TASK, ADD_TASK, MOD_TASK, DELETE_TASK } from "../actionTypes";

const initialState = {
  taskList: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TASK:
      // 리턴한 밸류가 그대로 새로운 상태를 덮어쓴다!
      // 따라서 분해할당을 잘 사용해 기존값을 해치지 않도록 유의!
      return {
        ...initialState,
        taskList: action.payload,
      };

    case ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      };

    case MOD_TASK:
      console.log(state);
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      };

    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.payload),
      };

    default:
      return { ...state };
  }
};

export default taskReducer;
