import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Manage.css";

const Manage = ({ manage }) => {
  const { _id, title, description, price, quantity, supplyerName, img } =
    manage;
  const navigate = useNavigate();

  const navigateToUpdate = (id) => {
    navigate(`/updateitem/${id}`);
  };
  return (
    <div>
      <Card className="border border-1 mx-auto m-5 card" style={{ width: "18rem" }}>
        <Card.Img
          className="rounded mx-auto mt-2 card-img"
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title className="title">{title}</Card.Title>
          <Card.Text className="text" title={description}>{description.slice(0,150)}</Card.Text>
          <Card.Text className="text">Price: {price}</Card.Text>
          <Card.Text className="text">quantity: {quantity}</Card.Text>
          <Card.Text className="text">Supplyer name: {supplyerName}</Card.Text>
          <Card.Text className="text">Supplyer Id.: {_id}</Card.Text>
          <Button onClick={() => navigateToUpdate(_id)} variant="primary">
            Update Item📝
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Manage;
