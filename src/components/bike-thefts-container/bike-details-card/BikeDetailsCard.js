import React, { useState, useEffect } from "react";
import { Modal, Button, Image, Header } from "semantic-ui-react";
import { TimestampToDate } from "../../../shared/Utils";
import "./bike-details-card.scss";

const BikeDetailsCard = ({ bikeItem, modalOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    title = "",
    description,
    occurred_at,
    address,
    media: { image_url },
    source: { name },
  } = bikeItem;

  useEffect(() => {
    setIsOpen(modalOpen);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen]);

  return (
    <Modal
      className="bike-details-card-container"
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      open={isOpen}
    >
      <Modal.Header>Bike case no. {bikeItem.id}</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={image_url} alt={name} wrapped />
        <Modal.Description>
          <Header>{title}</Header>
          <p>{description}</p>
          <p>At {address}</p>
          <p>Date: {TimestampToDate(occurred_at)}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Close"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setIsOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default BikeDetailsCard;
