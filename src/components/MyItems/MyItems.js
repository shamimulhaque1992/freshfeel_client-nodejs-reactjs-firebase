import axios from "axios";
import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useManage from "../../hooks/useManage";
import "./MyItems.css";

const MyItems = ({ myitem }) => {
  const [user] = useAuthState(auth);
  console.log(user);
  const [userItem, setUserItem] = useManage([]);
  useEffect(() => {
    const getAddItems = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/addedproduct?email=${email}`;
      const { data } = await axios.get(url, {
        headers:{
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setUserItem(data);
    };
    getAddItems();
  }, [user,setUserItem]);
  const handleDeleteProduct = (id) => {
    const conferm = window.confirm("Are you sure you want to delete?");
    if (conferm) {
      console.log("deleting user with id", id);
      const url = `http://localhost:5000/addedproduct/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("Delete");
            const remaining = userItem.filter((user) => user._id !== id);
            setUserItem(remaining);
          }
        });
    }
  };
  return (
    <div className="table-container">
      <h1>All Items added by{user?.email?user?.email : user?.displayName}</h1>
      <Table striped bordered hover className="text-center">
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
          {userItem.map((manage) => (
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
                <Button
                  className="d-flex align-items-center"
                  onClick={() => handleDeleteProduct(manage._id)}
                >
                  {" "}
                  <span>Delete</span> <i className="ms-1 fa-solid fa-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyItems;
