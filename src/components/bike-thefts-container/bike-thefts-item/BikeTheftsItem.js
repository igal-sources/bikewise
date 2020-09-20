import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import BikeDetailsCard from "../bike-details-card/BikeDetailsCard";
import { ConvertTimestampToDate } from "../../../shared/Utils";
import "./bike-thefts-item.scss";

const BikeTheftsItem = ({ bikeItem }) => {
  const {
    title,
    description,
    occurred_at,
    address,
    media: { image_url_thumb },
    source: { name },
  } = bikeItem;

  const isCancelled = useRef(false);
  const [timestampDate, setTimestampDate] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const ConvertTimestamp = () => setTimestampDate(ConvertTimestampToDate(occurred_at));

  useEffect(() => {
    !isCancelled.current && ConvertTimestamp();
    setModalOpen(false);
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bike-item-container">
      <Grid>
        <Grid.Column className="bike-item-image" width={4}>
          <img src={image_url_thumb} alt={name} />
        </Grid.Column>
        <Grid.Column className="bike-item-details" width={12}>
          <Link to="/" onClick={() => setModalOpen(true)}>
            {title}
          </Link>
          <div className="bike-item-description">{description}</div>
          <div className="bike-footer">
            {timestampDate} - {address}
          </div>
        </Grid.Column>
      </Grid>
      <BikeDetailsCard bikeItem={bikeItem} modalOpen={modalOpen} />
    </div>
  );
};

export default BikeTheftsItem;
