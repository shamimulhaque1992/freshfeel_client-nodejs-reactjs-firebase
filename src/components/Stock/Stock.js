import React from "react";
import { Button, Table } from "react-bootstrap";
import useManage from "../../hooks/useManage";
import "./Stock.css";

const Stock = () => {
  const [manages] = useManage();
  console.log(manages[0]);

  return (
    <div className="table-container">
      <Table striped bordered hover size="" className="text-center ">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Supplyer Name</th>
            <th>Image</th>
            <th>Pirce</th>
            <th>Quantity</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {manages.map((manage) => (
            <tr key={manage._id}>
              <td>{manage._id}</td>
              <td>{manage.title}</td>
              <td>{manage.supplyerName}</td>
              <td>
                <img src={manage.img} alt="" />
              </td>
              <td>{manage.price}</td>
              <td>{manage.quantity}</td>
              <td>
                <Button>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Stock;
