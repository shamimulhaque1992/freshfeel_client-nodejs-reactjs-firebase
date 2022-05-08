import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link to="/">Wholesale</Link>
                  </li>
                  <li>
                    <Link to="/">Production</Link>
                  </li>
                  <li>
                    <Link to="/">Export</Link>
                  </li>
                  <li>
                    <Link to="/">Import</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <Link to="/">Company</Link>
                  </li>
                  <li>
                    <Link to="/">Team</Link>
                  </li>
                  <li>
                    <Link to="/">Careers</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>FreshFeel.com</h3>
                <p>
                  Founded in 2022, FreshFeel.com is the world's largest fragrance digital warehouse company. We stock over 10,000 brand name authentic fragrances. Our selection contains the newest releases, the most popular celebrity scents, classic favorites and hard to find discontinued perfumes, all available at discount prices.<br/><br/>
                  Having one of the largest warehouses in the world allows us to buy in very large quantities. Our state of the art fulfillment center automates most of the fulfillment process so we can pass the savings on to you. Orders ship the same day they are placed with fast, free shipping that usually arrives within two or three days.
                </p>
              </div>
              <div className="col item social">
                <Link to="/">
                  <i className="icon ion-social-facebook"></i></Link>
                
                <Link to="/">
                  <i className="icon ion-social-twitter"></i></Link>
                
                <Link to="/">
                  <i className="icon ion-social-snapchat"></i></Link>
                
                <Link to="/">
                  <i className="icon ion-social-instagram"></i></Link>
                
              </div>
            </div>
            <p className="copyright">&copy; Khandoker Shamimul Haque 2022. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
