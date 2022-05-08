import React from "react";
import useManage from "../../hooks/useManage";
import "./Reliance.css";
const Reliance = () => {
  const [manages] = useManage();
  return (
    <div className="section-container container d-flex">
      <section className="text-section d-flex flex-column">
        <p className="mt-5">GREAT ON SENSITIVE SKIN</p>
        <h1 className="mt-3 gray">Gentle and non-irritating.</h1>
        <h6 className="mt-3 mb-5">
          Free from unwanted additives such as paraben and formaldehyde, this
          Fragrance is designed and formulated to leave you with beautiful
          experience without irritation.
        </h6>
      </section>
      <section className=" image-section text-center">
        <img src={manages[0]?.img} alt="" />
      </section>
    </div>
  );
};

export default Reliance;
