import * as types from "../shared/types";

const defaultState = 1;

export const pagingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.PAGINATION_TO:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
};

export default pagingReducer;
