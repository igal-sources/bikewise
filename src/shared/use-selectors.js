import { useSelector } from "react-redux";

export const useBikeCases = () => {
  const { cases = {} } = useSelector(state => state.bikeReducer);
  return cases;
};