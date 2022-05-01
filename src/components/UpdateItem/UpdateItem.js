import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const UpdateItem = () => {
  const { updateId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/updateitem/${updateId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [updateId]);

  const handleUpdateDeleveredQuentity = (event) => {
    event.preventDefault();
    const updatedQuentity = product.quantity - event.target.delevered.value;

    if (
      product.quantity < event.target.delevered.value ||
      updatedQuentity < 0
    ) {
      alert("You mighthave mistaken");
      return;
    } else {
      const updatedInfo = { updatedQuentity };
      //send updated data in backend
      const url = `http://localhost:5000/updateitem/${updateId}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedInfo),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("success", updatedInfo);
          console.log(product);
          /* const remaining = product.filter(product =>product._id !== updateId);
          setProduct(remaining) */
          /* setProduct(
              product.map(product => {
                  return {...product, quantity: edititem}
              })
          )

          setEdititem(product._id); */
          alert("Informatin updated successfully");
          console.log(product);
          event.target.reset();
        });
    }
  };
  return (
    <div className="">
      <h1 className="text-center pt-4 mt-4 text-primary">{product.title}</h1>
      <Card className="mx-auto m-5 card" style={{ width: "18rem" }}>
        <Card.Img
          className="border rounded mx-auto mt-2 p-1 card-img"
          variant="top"
          src={product.img}
        />
        <Card.Body>
          <Card.Title className="title">{product.title}</Card.Title>
          <Card.Text className="text">{product.description}</Card.Text>
          <Card.Text className="text">Price: {product.price}</Card.Text>
          <Card.Text className="text">quantity: {product.quantity}</Card.Text>
          <Card.Text className="text">
            Supplyer name: {product.supplyerName}
          </Card.Text>
          <Card.Text className="text">Supplyer Id.: {product._id}</Card.Text>
        </Card.Body>
      </Card>
      <div className="form-container mx-auto mt-5 mb-5">
        <Form
          onSubmit={handleUpdateDeleveredQuentity}
          className="form-body mx-auto"
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>How many delevered</Form.Label>
            <Form.Control
              name="delevered"
              placeholder="How many delevered"
              required
            />
            <Form.Text className="text-muted">
              Make sure the product is delevered.
            </Form.Text>
          </Form.Group>

          <Button
            className="mb-3 d-flex justify-content-center align-items-center"
            variant="primary"
            type="submit"
          >
            <i
              className="fa-solid fa-truck"
              style={{ transform: "rotateY(180deg)" }}
            ></i>
            <span className="mx-1">Delevered</span>
          </Button>

          <ToastContainer />
        </Form>
        
      </div>
      <div className="text-center">
          <Link to="/mnagestock">
            <Button>Manage Stock</Button>
          </Link>
        </div>
    </div>
  );
};

export default UpdateItem;
