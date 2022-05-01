import React from "react";
import useMyItems from "../../hooks/useMyItems";
import MyItems from "../MyItems/MyItems";

const AllMyItems = () => {
  const [myitems] = useMyItems();
  return (
    <div>
      <div className="services-container">
        {myitems.map((myitem) => (
          <MyItems key={myitem.id} myitem={myitem} />
        ))}
      </div>
    </div>
  );
};

export default AllMyItems;
