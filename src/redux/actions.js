import { ADD_TASK, ADD_MODE, SHOW_MODE, DELETE_TASK } from "./actionTypes";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const toggleAddMode = () => ({
  type: ADD_MODE,
});

export const toggleShowMode = () => ({
  type: SHOW_MODE,
});
