import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Pagination from "react-js-pagination";
import paginationAction from "../../../actions/pagingActions";
import "./footer.scss";
require("bootstrap/less/bootstrap.less");

const Footer = () => {
  const dispatch = useDispatch();
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    dispatch(paginationAction({pageNumber}));
    setActivePage(pageNumber);
  };

  return (
    <div className="footer-container">
      <Pagination className="footer-pagination"
        prevPageText="prev"
        nextPageText="next"
        firstPageText="first"
        lastPageText="last"
        activePage={activePage}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={15}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Footer;
