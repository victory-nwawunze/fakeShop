/** @format */

import { ActionTypes } from "../constance/action-types";
const initialState = {
  product: [
    {
      id: 1,
      title: "Depesh",
      category: "programmer",
    },
  ],
};
export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
