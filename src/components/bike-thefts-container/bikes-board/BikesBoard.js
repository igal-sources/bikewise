import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useBikeCases } from "../../../shared/use-selectors";
import { fetchBikes } from "../../../apis/BikeService";
import BikeTheftsItem from "../bike-thefts-item/BikeTheftsItem";
import "./bikes-board.scss";

const BikesBoard = () => {
  const isCancelled = useRef(false);
  const [bikes, setBikes] = useState({ incidents: [] });

  const cases = useBikeCases();
  !cases && setBikes(cases);

  const fetchTheftsBikes = () => {
    fetchBikes(1, 10, (bikesResponse) => {
      setBikes(bikesResponse);
      console.log(bikesResponse.incidents);
    });
  };

  useEffect(() => {
    !isCancelled.current && fetchTheftsBikes();

    if (Object.keys(cases).length > 0) {
      cases && setBikes(cases);
      console.log("cases: ", cases);
    }
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cases]);

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
