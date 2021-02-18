import { ADD_TASK, MOD_TASK, DELETE_TASK } from "../actionTypes";

const initialState = {
  taskList: [
    {
      id: 0,
      title: "피자 사오기",
      importance: 0,
      description: "피자헛에 가서 피자를 사오자",
      deadLine: "2021-02-20",
    },
    {
      id: 1,
      title: "학원가기",
      importance: 2,
      description: "늦지 않게 학원에 가자",
      deadLine: "2021-02-22",
    },
  ],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      };

    default:
      return { ...state };
  }
};

export default taskReducer;
