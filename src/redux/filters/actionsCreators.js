import { COLORCHANGE, STATUSCHANGE } from "./actionTypes";

export const colorFilterChanged = (color, changeType) => {
  return {
    type: COLORCHANGE,
    payload: {
      color,
      changeType,
    },
  };
};

export const statusFilterChanged = (status) => {
  return {
    type: STATUSCHANGE,
    payload: status,
  };
};
