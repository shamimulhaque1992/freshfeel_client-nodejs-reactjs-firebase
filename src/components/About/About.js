import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about pt-3 mt-3 w-75 mx-auto d-flex flex-column">
      <div className="mx-auto">
        <img src="../../images/My project (1).png" alt="" />
      </div>
      <h1 className="text-center">Name: Khandoker Shamimul Haque</h1>
      <div className="text-centers p-5 m-5 w-100 mx-auto">
        <h3>Goals:</h3>
      <ol>
        <li>At first I want to complete the course</li>
        <li>Then I want to start my corporate life with a job as a web developer</li>
        <li>Then my planing is to start taking preparation for MBA😁</li>
        <li>Then I'll try to get myself admitted for MBA😂</li>
        <li>After completing my MBA I want to build my own softwere farm😝😜.</li>
      </ol>
      </div>
    </div>
  );
};

export default About;
