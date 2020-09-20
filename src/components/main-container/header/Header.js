import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { fetchBikesSuccess} from "../../../actions/bikeActions";
import DatePicker from "react-datepicker";
import { DateToTimestamp } from "../../../shared/Utils";
import { search } from "../../../apis/BikeService";
import "react-datepicker/dist/react-datepicker.css";
import "./header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  const [searchValue, setSearchValue] = useState("");

  const handleTextChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleStartDateChange = (event) => {
    const value = event.target.value;
    setStartDate(value);
  };

  const handleEndDateChange = (event) => {
    const value = event.target.value;
    setEndDate(value);
  };

  const doSearch = () => {
    //TODO: Handle the problem to convert date to timestamp and back.
    //search(searchValue, DateToTimestamp(startDate), DateToTimestamp(endDate), (result) => {
    search(searchValue, undefined, undefined, (result) => {
      dispatch(fetchBikesSuccess({ ...result }));
      console.log("result: ", result);
    });
  };

  return (
    <div className="header-container">
      <div className="header-title">Police Department of Berlin</div>
      <div className="header-sub-title">Stolen bikes</div>
      <div className="header-search-area">
        <input
          type="text"
          placeholder="Search case description"
          className="header-search-text"
          value={searchValue}
          onChange={handleTextChange}
          autoFocus
        />
        <DatePicker
          placeholderText="from"
          onChange={handleStartDateChange}
          selected={startDate}
          className="header-dates"
        />
        <DatePicker
          placeholderText="to"
          onChange={handleEndDateChange}
          selected={endDate}
          className="header-dates"
        />

        <Button id="header-search-Button" size={"mini"} onClick={doSearch}>
          Find cases
        </Button>
      </div>
    </div>
  );
};

export default Header;
