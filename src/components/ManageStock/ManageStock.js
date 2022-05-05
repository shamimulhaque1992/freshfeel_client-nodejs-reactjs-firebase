import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Stock from "../Stock/Stock";

const ManageStock = () => {
  return (
    <div>
      <h1 className="text-center mt-5 mb-5 text-primary">Manage Stock</h1>
      <div className="">
        <Stock/>
      </div>
      <div className="text-center mx-auto mb-5 mt-5">
        <Link to="/additems">
          <Button>Add New Item</Button>
        </Link>
      </div>
    </div>
  );
};

export default ManageStock;
