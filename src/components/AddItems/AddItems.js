import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import "./AddItems.css";

const AddItems = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((info) => {
        console.log(info);
      });
  };

  

  return (
    <div className="">
      <h1 className="text-center pt-5 text-primary">Add a New Porduct!</h1>
      <div className="form-container mt-5 mb-5">
        <form
          className="d-flex flex-column w-75"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="mb-4 mt-4"
            placeholder="Enter The Name of The Product"
            {...register("title", { required: true, maxLength: 200 })}
          />
          <textarea
            className="mb-4"
            placeholder="Enter Short Description"
            {...register("description")}
          />
          <input
            className="mb-4"
            placeholder="Enter Unit Price"
            type="number"
            {...register("price")}
          />
          <input
            className="mb-4"
            placeholder="Enter Quantity"
            type="number"
            {...register("quantity")}
          />
          <input
            className="mb-4"
            placeholder="Enter Supplyers Name"
            {...register("supplyerName", { required: true, maxLength: 200 })}
          />
          <input
            className="mb-4"
            name="email"
            value={user?.email ? user?.email : user?.displayName}
            {...register("supplyerEmail", { required: true, maxLength: 200 })}
          />
          <input
            className="mb-4"
            placeholder="Enter Image URL"
            type="text"
            {...register("img", { required: true, maxLength: 1000 })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <input className="mb-4" value="Add To Database" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
