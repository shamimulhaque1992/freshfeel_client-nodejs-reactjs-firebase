import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
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
          console.log("success", data);
          alert("Informatin updated successfully");
          event.target.reset();
        });
    }
  };
  return (
    <div className="">
      <h1 className="text-center pt-4 mt-4 text-primary">{product.title}</h1>
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
    </div>
  );
};

export default UpdateItem;
