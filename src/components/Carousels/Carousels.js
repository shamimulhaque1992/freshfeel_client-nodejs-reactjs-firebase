import React from "react";
import { Carousel } from "react-bootstrap";
import useManage from "../../hooks/useManage";
import './Carousels.css'

const Carousels = () => {
  const [manages] = useManage();
  return (
    <div>
      <Carousel fade className="mx-auto mt-3 text-black carousels-container">

        {/*First carousels */}
        <Carousel.Item>
          <img
            className="carousels-img d-block img-fluid rounded"
            src={manages[0]?.img}
            alt="First slide"
          />
          <Carousel.Caption className="carosel-text mb-5 rounded">
            <h3 className="font font-title">Calvin Klein</h3>
            <p className="font font-description" title="Calvin Klein is a brand that is not only known for its fragrances, but their apparel, watches and undergarments as well. They have been around for many years, and what has worked for them throughout the years is the affordability of their products. Some of their most known fragrances are CK One, Eternity, and Obsession. Characterized by its unique scents, most of the Calvin Klein perfumes are unisex, which makes them more accessible to a larger group of people.">Calvin Klein is a brand that is not only known for its fragrances, but their apparel, watches and undergarments as well.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/*second carousel */}
        <Carousel.Item>
          <img
            className="d-block img-fluid rounded"
            src={manages[1]?.img}
            alt="Second slide"
          />

          <Carousel.Caption className="carosel-text mb-5 rounded">
            <h3 className="font font-title">Natural Beauty!</h3>
            <p className="font font-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/*Third carousel */}
        <Carousel.Item>
          <img
            className="d-block img-fluid rounded"
            src={manages[2]?.img}
            alt="Third slide"
          />

          <Carousel.Caption className="carosel-text mb-5 rounded">
            <h3 className="font font-title">Congratulations! on Your Wedding.</h3>
            <p className="font font-description">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/*Fourth carousel */}
        <Carousel.Item>
          <img
            className="d-block img-fluid rounded"
            src={manages[4]?.img}
            alt="Third slide"
          />

          <Carousel.Caption className="carosel-text mb-5 rounded">
            <h3 className="font font-title">Wedding Ceremony.</h3>
            <p className="font font-description">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
