import React from "react";
import "./BestServices.css";
import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const BestServices = () => {
  return (
    <div className="bg-light pt-5 pb-4 mb-5 mt-5">
      <Container className="best-services pt-2">
        <div className="row ">
          <div className="col-md-6">
            <p className="text-secondary">WHY CHOOSE US</p>
            <h1 className="best-element brand-color-heading">
              BEST <br /> SERVICES <br /> IN OUR <br /> PLACE
            </h1>
          </div>
          <div className="col-md-6">
            <div className="position-relative">
              <h5 className="brand-color-heading">
                {" "}
                <FaStar className="service-star" />
                24/7 Technical Support
              </h5>
              <p className="text-secondary">
                Enjoy fast access to our friendly and competent support
                engineers. Available for you via FQA & Ticket.
              </p>
            </div>
            <div class="position-relative">
              <h5 className="brand-color-heading">
                <FaStar className="service-star" />
                100% Satisfaction Guarantee
              </h5>
              <p className="text-secondary">
                We want you to be completely satisfied with our services. We
                will do whatever it takes to make you happy. No hassles, no
                problems.
              </p>
            </div>
            <div class="position-relative">
              <h5 className="brand-color-heading">
                {" "}
                <FaStar className="service-star" />
                We have a dedicated team
              </h5>
              <p className="text-secondary">
                our technical team has been renowned for their excellent input
                for all projects to date. For years our team has excelled their
                expertise to the impressive level that today keeps our clients
                happy with us
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BestServices;
