import * as types from "../shared/types";

export const paginationAction = (pageNum) => {
  return {
    type: types.PAGINATION_TO,
    payload: pageNum
  };
};

export default paginationAction;