import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./MyItems.css"

const MyItems = ({myitem}) => {
    const {name, profetion, comment, review, ratings, recomendation, img}= myitem;
  return (
    <div>
      <Card className="mx-auto m-5 card" style={{ width: "18rem" }}>
        <Card.Img className="border rounded mx-auto p-1"variant="top" src={img} />
        <Card.Body>
          <Card.Title className="title">{name}</Card.Title>
          <Card.Text className="text">
            {profetion}
          </Card.Text>
          <Card.Text className="text">Price: {comment}</Card.Text>
          <Card.Text className="text">Review: {review}</Card.Text>
          <Card.Text className="text">Ratings: {ratings}</Card.Text>
          <Card.Text className="text">Ratings Count: {recomendation}</Card.Text>
          <Link to='/additems'>
            <Button variant="primary">📞Call {name}</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyItems;