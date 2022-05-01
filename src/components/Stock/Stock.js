import React from "react";
import { Button, Card } from "react-bootstrap";

const Stock = ({ manage }) => {
  const { _id, title, description, price, quantity, supplyerName, img } =
    manage;
  return (
    <div>
      <Card className="mx-auto m-5 card" style={{ width: "18rem" }}>
        <Card.Img
          className="border rounded mx-auto mt-2 p-1 card-img"
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title className="title">{title}</Card.Title>
          <Card.Text className="text">{description}</Card.Text>
          <Card.Text className="text">Price: {price}</Card.Text>
          <Card.Text className="text">quantity: {quantity}</Card.Text>
          <Card.Text className="text">Supplyer name: {supplyerName}</Card.Text>
          <Card.Text className="text">Supplyer Id.: {_id}</Card.Text>
          <Button variant="primary">Delete Item 🗑</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Stock;
