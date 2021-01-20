import React from "react";
import { Container, Row } from "react-bootstrap";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ClientReviews.css";
import "swiper/swiper-bundle.css";
import { CarouselData } from "../../../data/data";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ClientReviews = () => {
  return (
    <section className="bg-light pt-5">
      <Container className="text-center pb-5">
        <h2 className="m-auto brand-color  pb-5">CUSTOMERS REVIEWS</h2>
        <Row className="pb-5">
          <Swiper
            slidesPerView={3}
            navigation
            pagination={{
              clickable: true,
              type: "bullets",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {CarouselData.map((carousel, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="card border-0 mr-3 rounded mt-5">
                    <div className="card-header bg-transparent border-0 position-relative">
                      <img
                        src={carousel.img}
                        alt=""
                        className=" rounded-circle review-img"
                      />
                      <h5 className="mt-4 brand-color-heading">
                        {carousel.name}
                      </h5>
                      <p className="text-secondary m-0">{carousel.title}</p>
                    </div>
                    <div className="card-body pb-5 p-0 p-1">
                      <p className="card-text text-secondary">
                        {" "}
                        {carousel.description}
                      </p>
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

export default ClientReviews;
