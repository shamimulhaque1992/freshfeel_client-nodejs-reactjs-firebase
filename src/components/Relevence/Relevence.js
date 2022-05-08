import React from "react";
import "./Relevence.css";
const Relevence = () => {
  return (
    <div>
      <section className="container header">
        <h2 className="text-center gray">
          We make soure our customers get the best products possible.
        </h2>
      </section>
      <section className="container content-container">
        <section className="content">
          <div className="logo">
            <i className="fa-solid fa-hand-holding-dollar"></i>
          </div>
          <div className="contentheader">
            <h4>FAIR PRICES</h4>
          </div>
          <div className="contdescription">
            <p>
              By selling directly to you from <strong>our factories</strong>,
              you get a high-end product at a great price.
            </p>
          </div>
        </section>
        <section className="content">
          <div className="logo">
            <i className="fa-solid fa-flask"></i>
          </div>
          <div className="contentheader">
            <h4>MADE WITH INTEGRITY</h4>
          </div>
          <div className="contdescription">
            <p>
              We didn’t want to supply anything we wouldn’t put on our own skin,
              that’s why our <strong>FRAGRANCE</strong> are free of any
              parabens.
            </p>
          </div>
        </section>

        <section className="content">
          <div className="logo">
            <i className="fa-solid fa-award"></i>
          </div>
          <div className="contentheader">
            <h4>HAPPINESS GUARANTEED</h4>
          </div>
          <div className="contdescription">
            <p>
              We give you a full <strong>60 days</strong> to make sure you absolutely love your
              Esqido eyeliner, guaranteed.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Relevence;
