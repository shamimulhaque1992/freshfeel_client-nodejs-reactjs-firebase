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
            <h3 className="font font-title">Dior</h3>
            <p className="font font-description" title="Fashion house Dior, headquartered in France, was founded in 1946. The fashion house has a wide array of products in its repertoire. Items such as clothing, fashion accessories, beauty products, as well as jewelry and watches are some of the articles they provide customers with. One of their signature scents, J’adore, has been one of the best selling perfumes on the market since 1999.">Fashion house Dior, headquartered in France, was founded in 1946.</p>
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
