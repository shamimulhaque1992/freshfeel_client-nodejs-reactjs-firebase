import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyItems from "../MyItems/MyItems";

const AllMyItems = () => {
  const [user]= useAuthState(auth);
  return (
    <div>
      <h1 className="w-75 mx-auto text-center mb-5 mt-5">
        <span>All Items added by</span> <br />
        <small className='userName'>{user?.email ? user?.email : user?.displayName}</small>
      </h1>
      <div className="">
        <MyItems />
      </div>
    </div>
  );
};

export default AllMyItems;
