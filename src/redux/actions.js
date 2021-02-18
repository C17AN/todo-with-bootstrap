import { ADD_TASK, ADD_MODE, SHOW_MODE } from "./actionTypes";

export const addTask = (task) => {
  console.log(task);
  return {
    type: ADD_TASK,
    payload: { ...task, id: 1 },
  };
};

export const toggleAddMode = () => ({
  type: ADD_MODE,
});

export const toggleShowMode = () => ({
  type: SHOW_MODE,
});
