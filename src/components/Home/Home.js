import React from "react";
import useManage from "../../hooks/useManage";
import Carousels from "../Carousels/Carousels";
import Manage from "../Manage/Manage";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Relevence from "../Relevence/Relevence";
import Reliance from "../Reliance/Reliance";

const Home = () => {
  const [manages] = useManage();
  console.log(manages);

  return (
    <div className="container mt-5">
        <div className="mb-5 mt-5">
          <Carousels></Carousels>
        </div>
        <h1 className="text-center p-5 text-primary">Our Products</h1>
        <div className="services-container">
          {manages.slice(0, 6).map((manage) => (
            <Manage key={manage._id} manage={manage} />
          ))}
        </div>
        <div className="text-center mb-5">
          <Link to="/mnagestock">
            <Button>Manage Stock</Button>
          </Link>
        </div>
        <hr />
        <div className="mt-5 mb-5">
          <Relevence></Relevence>
        </div>
        <hr />
        <div className="mt-5 mb-5">
          <Reliance></Reliance>
        </div>
    </div>
  );
};

export default Home;
