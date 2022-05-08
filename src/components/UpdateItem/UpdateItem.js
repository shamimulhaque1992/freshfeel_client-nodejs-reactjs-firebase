import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const UpdateItem = () => {
  const { updateId } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState([]);
  useEffect(() => {
    const url = `https://obscure-harbor-31706.herokuapp.com/updateitem/${updateId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [updateId]);
  useEffect(() => {
    const url = `https://obscure-harbor-31706.herokuapp.com/updateitem/${updateId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCount(data.quantity));
  }, [updateId]);

  const handleSingleUniteDelevery = (event) => {
    event.preventDefault();

    const updatedQuentity = count - 1;
    setCount(updatedQuentity);
    if (count < 0 || updatedQuentity < 0) {
      alert("You mighthave mistaken");
      return;
    } else {
      const updatedInfo = { updatedQuentity };
      //send updated data in backend
      const url = `https://obscure-harbor-31706.herokuapp.com/updateitem/${updateId}`;
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

          alert("Informatin updated successfully");
        });
    }
  };

  const handleUpdateDeleveredQuentity = (event) => {
    event.preventDefault();
    const inpvalue = parseInt(event.target.delevered.value);
    console.log(typeof inpvalue);
    const updatedQuentity =
      count - inpvalue;
      setCount(updatedQuentity);

    if (
      count < inpvalue ||
      updatedQuentity < 0
    ) {
      alert("You mighthave mistaken");
      return;
    } else {
      const updatedInfo = { updatedQuentity };
      //send updated data in backend
      const url = `https://obscure-harbor-31706.herokuapp.com/updateitem/${updateId}`;
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
          alert("Informatin updated successfully");
          console.log(product);
          event.target.reset();
        });
    }
  };

  const handleResockItemQuentity = (event) => {
    event.preventDefault();
    const inpvalue = parseInt(event.target.restocked.value);
    const updatedQuentity = count + inpvalue;
    setCount(updatedQuentity);

    console.log(typeof inpvalue);

    if (
      count < event.target.restocked.value ||
      updatedQuentity < 0
    ) {
      alert("You mighthave mistaken");
      return;
    } else {
      const updatedInfo = { updatedQuentity };
      //send updated data in backend
      const url = `https://obscure-harbor-31706.herokuapp.com/updateitem/${updateId}`;
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
          alert("Informatin updated successfully");
          console.log(product);
          event.target.reset();
        });
    }
  };
  return (
    <div className="">
      <h1 className="text-center pt-4 mt-4 text-primary">{product.title}</h1>
      <Card className="mx-auto w-50 m-5 card" style={{ width: "18rem" }}>
        <Card.Img
          className="border rounded mx-auto mt-2 p-1 card-img"
          variant="top"
          src={product.img}
        />
        <Card.Body>
          <Card.Title className="title">{product.title}</Card.Title>
          <Card.Text className="text">{product.description}</Card.Text>
          <Card.Text className="text">Price: {product.price}</Card.Text>
          <Card.Text className="text">quantity: {count}</Card.Text>
          <Card.Text className="text">
            Supplyer name: {product.supplyerName}
          </Card.Text>
          <Card.Text className="text">Supplyer Id.: {product._id}</Card.Text>
          <Card.Text className="text">Product Status: {product.sellstat}</Card.Text>
        </Card.Body>
      </Card>
      <div className="form-container mx-auto mt-5 mb-5">
        <Form
          onSubmit={handleUpdateDeleveredQuentity}
          className="form-body mx-auto"
        >
          {/* Multiple unite delevery operation */}
          <Form.Group className="mb-3">
            <Form.Label>Put the quantity of delevered product</Form.Label>
            <Form.Control
              name="delevered"
              type="number"
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
          <hr />

          {/* single unite delevery operation */}
          <Form.Label>Click here for single unite delevery</Form.Label>
          <Button
            onClick={handleSingleUniteDelevery}
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
          <Form.Text className="text-muted">
            Make sure the product is delevered.
          </Form.Text>

          <ToastContainer />
        </Form>
      </div>

      {/* Re Stock Operations */}
      <div className="form-container mx-auto mt-5 mb-5">
        <Form onSubmit={handleResockItemQuentity} className="form-body mx-auto">
          <h2> Restock the items</h2>
          {/* Multiple unite delevery operation */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Put the quantity of product been Restocked</Form.Label>
            <Form.Control
              name="restocked"
              type="number"
              placeholder="How many delevered"
              required
            />
            <Form.Text className="text-muted">
              Make sure the product is stocked.
            </Form.Text>
          </Form.Group>

          <Button
            className="mb-3 d-flex justify-content-center align-items-center"
            variant="primary"
            type="submit"
          >
            <i className="fa-solid fa-cash-register"></i>
            <span className="mx-1">Restock</span>
          </Button>
        </Form>
      </div>
      <div className="text-center">
        <Link to="/mnagestock">
          <Button className="mb-5">Manage Stock</Button>
        </Link>
      </div>
    </div>
  );
};

export default UpdateItem;
