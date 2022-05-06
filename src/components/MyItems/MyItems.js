import axios from "axios";
import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useManage from "../../hooks/useManage";
import "./MyItems.css";

const MyItems = ({ myitem }) => {
  const [user] = useAuthState(auth);
  const [userItem, setUserItem] = useManage([]);
  useEffect(() => {
    const getAddItems = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/addedproduct?email=${email}`;
      const { data } = await axios.get(url);
      setUserItem(data)
    };
    getAddItems()
  }, [user, setUserItem]);
  console.log(userItem);
  const { name, profetion, comment, review, ratings, recomendation, img } =
    myitem;
  return (
    <div>
      <h1>orders: {userItem.email}</h1>
      <Card className="mx-auto m-5 card" style={{ width: "18rem" }}>
        <Card.Img
          className="border rounded mx-auto p-1"
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title className="title">{name}</Card.Title>
          <Card.Text className="text">{profetion}</Card.Text>
          <Card.Text className="text">Price: {comment}</Card.Text>
          <Card.Text className="text">Review: {review}</Card.Text>
          <Card.Text className="text">Ratings: {ratings}</Card.Text>
          <Card.Text className="text">Ratings Count: {recomendation}</Card.Text>
          <Link to="/additems">
            <Button variant="primary">📞Call {name}</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyItems;
