// import React from 'react';

// const MultiRowSlides = () => {
//     return (
//       <div className="mb-5">
//
//       </div>
//     );
// };

// export default MultiRowSlides;

import React from "react";
import "./MultiRowSlides.css";
import { Container, Row } from "react-bootstrap";
import carousel1 from "../../../images/clients/adibd.jpg";
import carousel2 from "../../../images/clients/babui.jpg";
import carousel3 from "../../../images/clients/Bikrampur.png";
import carousel4 from "../../../images/clients/dab-logo-bangla.png";
import carousel5 from "../../../images/clients/dailysundorbon.jpg";
import carousel6 from "../../../images/clients/hasan-homes-and-develpoers.png";
import carousel7 from "../../../images/clients/kishorekaal.jpg";
import carousel8 from "../../../images/clients/logo-somoyer-kolom.png";
import carousel9 from "../../../images/clients/poricoy.jpg";
import carousel11 from "../../../images/clients/savvataralo.png";
import "react-multi-carousel/lib/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const MultiRowSlides = () => {
  const allCarousel = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
    carousel7,
    carousel8,
    carousel9,
    carousel11,
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 9000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className=" pt-4 position-relative d-flex justify-content-center mb-5">
      <Container className="text-center our-clint">
        <h2 className="m-auto brand-color pb-5">OUR CLIENTS</h2>
        <Row className="p-0">
          <Swiper
            responsive={responsive}
            slidesPerView={6}
            navigation
            pagination={{
              clickable: true,
              type: "bullets",
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {allCarousel.map((carousel, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="card border-0 rounded  p-2 mx-2 shadow-sm mb-5">
                    <div key={index + 100}>
                      <img className="carousel-image" src={carousel} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Row>
      </Container>
    </section>
  );
};

export default MultiRowSlides;
