import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useManage from "../../hooks/useManage";
import "./MyItems.css";

const MyItems = ({ myitem }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [userItems, setUserItem] = useManage([]);
  useEffect(() => {
    const getAddItems = async () => {
      const email = user.email;
      const url = `http://localhost:5000/addedproduct?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUserItem(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getAddItems();
  }, [user, setUserItem, navigate]);

  //Deleting the product by id
  const handleDeleteProduct = (id) => {
    const conferm = window.confirm("Are you sure you want to delete?");
    if (conferm) {
      const url = `http://localhost:5000/addedproduct/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = userItems.filter((user) => user._id !== id);
            setUserItem(remaining);
          }
        });
    }
  };
  return (
    <div className="table-container">
      <Table
        striped
        bordered
        hover
        className="text-center mb-5 mx-auto"
        style={{ width: "90%" }}
      >
        <thead>
          <tr>
            <th className="hide-column hide-md-column">Id</th>
            <th>Name</th>
            <th className="hide-column">Supplyer Name</th>
            <th className="hide-column">Image</th>
            <th className="hide-column">Pirce</th>
            <th>Quantity</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {userItems.map((useritem) => (
            <tr key={useritem._id}>
              <td className="hide-column hide-md-column">{useritem._id}</td>
              <td>{useritem.title}</td>
              <td className="hide-column">{useritem.supplyerName}</td>
              <td className="hide-column">
                <img src={useritem.img} alt="" />
              </td>
              <td className="hide-column">৳ {useritem.price} BDT</td>
              <td>{useritem.quantity}</td>
              <td className="d-flex align-items-center justify-content-around flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row">
                <Button
                  className="d-flex align-items-center mx-auto"
                  onClick={() => handleDeleteProduct(useritem._id)}
                >
                  {" "}
                  <span>Delete</span> <i className="ms-1 fa-solid fa-trash"></i>
                </Button>

                <Button
                  className="d-flex align-items-center mx-auto"
                  onClick={() => handleDeleteProduct(useritem._id)}
                >
                  {" "}
                  <span>Update</span>
                  <i class="ms-1 fa-solid fa-highlighter"></i>
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
