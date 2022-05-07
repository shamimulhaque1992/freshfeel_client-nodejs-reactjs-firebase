import React from "react";
import { Button, Table } from "react-bootstrap";
import useManage from "../../hooks/useManage";
import "./Stock.css";

const Stock = () => {
  const [manages, setManage] = useManage();
  console.log(manages[0]);

  const handleDeleteProduct = (id) => {
    const conferm = window.confirm('Are you sure you want to delete?')
    if(conferm){
      console.log('deleting user with id', id);
      const url = `http://localhost:5000/product/${id}`;
      fetch(url,{
        method: 'DELETE',
      })
      .then(res=> res.json())
      .then(data =>{
        if (data.deletedCount > 0){
          console.log("Delete");
          const remaining = manages.filter(user => user._id!== id);
          setManage(remaining)
        }
      })
    }
  }

  return (
    <div className="table-container">
      <Table striped bordered hover className="text-center mx-auto"style={{width: '90%'}}>
        <thead>
          <tr>
            <th className="hide-column">Id</th>
            <th>Name</th>
            <th className="hide-column">Supplyer Name</th>
            <th className="hide-column">Image</th>
            <th className="hide-column">Pirce</th>
            <th>Quantity</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {manages.map((manage) => (
            <tr key={manage._id}>
              <td className="hide-column">{manage._id}</td>
              <td>{manage.title}</td>
              <td className="hide-column">{manage.supplyerName}</td>
              <td className="hide-column">
                <img src={manage.img} alt="" />
              </td>
              <td className="hide-column">৳ {manage.price} BDT</td>
              <td>{manage.quantity}</td>
              <td>
                <Button className="d-flex align-items-center mx-auto" onClick={()=>handleDeleteProduct(manage._id)}> <span>Delete</span> <i className="ms-1 fa-solid fa-trash"></i></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Stock;
