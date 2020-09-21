import React, { useState, useEffect, useRef } from "react";
import { useBikeCases, usePaging } from "../../../shared/use-selectors";
import { fetchBikes } from "../../../apis/BikeService";
import Pagination from "react-js-pagination";
import BikeTheftsItem from "../bike-thefts-item/BikeTheftsItem";
import "./bikes-board.scss";

const BikesBoard = () => {
  const isCancelled = useRef(false);
  const [bikes, setBikes] = useState({ incidents: [] });
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
    fetchTheftsBikes(pageNumber);
  };
  //const pageHook = usePaging();
  const cases = useBikeCases();
  !cases && setBikes(cases);

  const fetchTheftsBikes = (page) => {
    fetchBikes(page, 10, (bikesResponse) => {
      setBikes(bikesResponse);
      console.log(bikesResponse.incidents);
    });
  };

  useEffect(() => {
    !isCancelled.current && fetchTheftsBikes(activePage);

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
      <div className="footer-container">
      <Pagination className="footer-pagination"
        prevPageText="prev"
        nextPageText="next"
        firstPageText="first"
        lastPageText="last"
        activePage={activePage}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={7}
        onChange={handlePageChange}
      />
    </div>
    </div>
  );
};

export default BikesBoard;
