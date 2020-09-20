import bikeReducer from "./bikeReducer";
import pagingReducer from "./pagingReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  bikeReducer,
  pagingReducer,
});

export default rootReducer;
