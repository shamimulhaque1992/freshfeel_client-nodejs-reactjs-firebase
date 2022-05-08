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
            <h3 className="font font-title">Creed</h3>
            <p className="font font-description"title="One of the oldest perfumeries in the world, the brand was established in the 1700s in Britain. They used to supply opulent perfumes to the royal family, with Queen Victoria as a loyal customer. In the family for many generations, today the owner is Oliver Creed. He still uses the same methods of filtering, mixing, and weighing the ingredients, just like his ancestors used to centuries ago. Hey, if it works for them, who are we to judge?">
              One of the oldest perfumeries in the world, the brand was established in the 1700s in Britain.
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
            <h3 className="font font-title">Hermes</h3>
            <p className="font font-description"title="Another famous fashion house that is well known for their sophisticated fashions and accessories, they have quite an extensive perfume line. With enduring scents, their perfumes offer you an aura of elegance and richness like no other brand.Without being overwhelming, their offerings are on the strong side. They do not have many subdued notes in their fragrance collection, so be prepared to be mesmerized by this brand that is the epitome of glamour and sophistication.">
              Another famous fashion house that is well known for their sophisticated fashions and accessories, they have quite an extensive perfume line.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
