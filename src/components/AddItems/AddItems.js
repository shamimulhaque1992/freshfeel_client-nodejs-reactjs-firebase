import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";

import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./AddItems.css";

const AddItems = () => {
  const [user] = useAuthState(auth);
  const [setName] = useState("");
  const [setAddress] = useState("");
  const [setPhone] = useState("");
  const [error] = useState("");
  // const navigate = useNavigate();
  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
  };


  return (
    <div className="">
      <h1 className="text-center pt-5 text-primary">Conferm Your Order</h1>
      <div className="form-container mt-5 mb-5">
        <Form onSubmit={handleCreateUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onBlur={handleNameBlur}
              type="text"
              placeholder="Your Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
            
              value={user?.email?user?.email: " "}
              readOnly
              type="email"
              placeholder="Enter email"
              required
              name="email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <div className="position-relative">
              <Form.Control
                onBlur={handleAddressBlur}
                placeholder="Address"
                name="address"
                required
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfermPassword">
            <Form.Label>Phone Number</Form.Label>
            <div className="position-relative">
              <Form.Control
                onBlur={handlePhoneBlur}
                placeholder="Phone Number"
                name="confermPassword"
                required
              />
            </div>
            <p style={{ color: "red" }}>{error}</p>
          </Form.Group>
          <p style={{ color: "red" }}>{error}</p>
          <Link to="/">
              
            <Button className="mb-3" variant="primary" type="submit">
              Conferm
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default AddItems;
