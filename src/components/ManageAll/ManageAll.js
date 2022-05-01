import React from "react";
import useManage from "../../hooks/useManage";
import Manage from "../Manage/Manage";

const ManageAll = () => {
  const [manages] = useManage();
  return (
    <div>
      <div className="services-container">
        {manages.map((manage) => (
          <Manage key={manage._id} manage={manage} />
        ))}
      </div>
    </div>
  );
};

export default ManageAll;
