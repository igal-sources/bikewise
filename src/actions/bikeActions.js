import * as types from "../shared/types";

export const fetchBikesSuccess = cases => {
  return {
    type: types.FETCH_BIKES_SUCCESS,
    payload: cases
  };
};

export const fetchArtistsError = () => {
  return {
    type: types.FETCH_BIKES_ERROR
  };
};