import {
  ADDED,
  CLEARCOMPLETED,
  DELETED,
  COLORSELECTED,
  TOGGLED,
  ALLCOMPLETED,
} from "./actionTypes";

export const todoAdded = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const todoToggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const colorSelected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color,
    },
  };
};

export const todoDeleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
