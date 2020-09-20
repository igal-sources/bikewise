import React, { useState, useEffect, useRef } from "react";
import { useBikeCases, usePaging } from "../../../shared/use-selectors";
import { fetchBikes } from "../../../apis/BikeService";
import BikeTheftsItem from "../bike-thefts-item/BikeTheftsItem";
import "./bikes-board.scss";

const BikesBoard = () => {
  const isCancelled = useRef(false);
  const [bikes, setBikes] = useState({ incidents: [] });
  const [pageNumber, setPageNum] = useState(1);

  const pageHook = usePaging();
  const cases = useBikeCases();
  !cases && setBikes(cases);

  const fetchTheftsBikes = (page) => {
    console.log("fetchTheftsBikes: ");
    fetchBikes(page, 10, (bikesResponse) => {
      setBikes(bikesResponse);
      console.log(bikesResponse.incidents);
    });
  };

  useEffect(() => {
    !isCancelled.current && fetchTheftsBikes(pageNumber);
    setPageNum(pageHook);

    if (Object.keys(cases).length > 0) {
      cases && setBikes(cases);
      console.log("cases: ", cases);
    }
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cases, pageNumber]);

  return (
    <div className="bikes-board-container">
      <div className="bikes-board-items">
        {bikes.incidents.map((bikeItem) => (
          <BikeTheftsItem key={bikeItem.id} bikeItem={bikeItem} />
        ))}
      </div>
    </div>
  );
};

export default BikesBoard;
