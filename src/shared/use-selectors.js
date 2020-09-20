import { useSelector } from "react-redux";

export const useBikeCases = () => {
  const { cases = {} } = useSelector((state) => state.bikeReducer);
  return cases;
};

export const usePaging = () => { 
  const { page: { pageNumber } = {} } = useSelector((state) => state.pagingReducer);
  return pageNumber;
};
