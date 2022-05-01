import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useManage from "../../hooks/useManage";
import Stock from "../Stock/Stock";

const ManageStock = () => {
  const [manages] = useManage();
  return (
    <div>
      <div className="services-container">
        {manages.slice(0, 6).map((manage) => (
          <Stock key={manage._id} manage={manage} />
        ))}
      </div>
      <div className="text-center mx-auto">
        <Link to="/additems">
          <Button>Add New Item</Button>
        </Link>
      </div>
    </div>
  );
};

export default ManageStock;
