import React from "react";
import useMyItems from "../../hooks/useMyItems";
import useManage from "../../hooks/useManage";
import Carousels from "../Carousels/Carousels";
import Manage from "../Manage/Manage";
import MyItems from "../MyItems/MyItems";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  const [manages] = useManage();
  const [myitems] = useMyItems();
  console.log(manages);

  return (
    <div>
      <div className="">
        <Carousels></Carousels>
        <h1 className="text-center p-5 text-primary">My Featured Services</h1>
        <div className="services-container">
          {manages.slice(0, 6).map((manage) => (
            <Manage key={manage._id} manage={manage} />
          ))}
        </div>
        <div className="text-center">
          <Link to="/mnagestock">
            <Button>Manage Stock</Button>
          </Link>
        </div>
        <h1 className="text-center p-5 text-primary">My Happy Customers</h1>
        <div className="services-container">
          {myitems.slice(0, 3).map((myitem) => (
            <MyItems key={myitem.id} myitem={myitem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
