import * as types from "../shared/types";

const defaultState = { incidents: [] };

export const bikeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_BIKES_SUCCESS:
      return {
        ...state,
        cases: action.payload,
        fetchBikesError: false,
        fetchBikesPending: false
      };

    case types.FETCH_BIKES_ERROR:
      return {
        ...state,
        fetchBikesError: true,
        fetchBikesPending: false
      };

    default:
      return state;
  }
};

export default bikeReducer;