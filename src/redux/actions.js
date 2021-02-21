import {
  ADD_MODE,
  MOD_MODE,
  SHOW_MODE,
  ADD_TASK,
  MOD_TASK,
  DELETE_TASK,
} from "./actionTypes";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const modTask = (task) => {
  return {
    type: MOD_TASK,
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

export const toggleModMode = () => ({
  type: MOD_MODE,
});

export const toggleShowMode = () => ({
  type: SHOW_MODE,
});
