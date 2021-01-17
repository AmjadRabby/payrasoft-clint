import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaHandPointDown } from "react-icons/fa";
import headerBaner from "../../../images/banner_image.png";

const MainHeader = () => {
  return (
    <div className="main-header">
      <Container className="">
        <Row>
          <div className="col-md-6">
            <div className="header-container  header-main-text">
              <h5 className="mb-4">CREATE YOUR DREAM WITH US</h5>
              <h1 className="text-white">
                Design, Development, Maintenance and Support services for your
                Website & Software.
              </h1>
              <p className="text-header">
                We have Total Completed 3600+ Projects in 1400+ Clients from
                Whole Over the World. We have total 50+ Ready Software
              </p>
              {/* <FaHandPointDown className="up-icon mt-5" /> */}
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img className="img-fluid header-img" src={headerBaner} alt="" />
          </div>
        </Row>
        {/* <img className="img-fluid p-5 header-img" src={headerBaner} alt="" />
        <div className="header-container text-center ">
          <h4 className="text-white ">CREATE YOUR DREAM WITH US</h4>
          <h1 className="text-white">
            Design, Development, Maintenance and Support <br /> services for
            your Website & Software.
          </h1>
          <p className="text-white">
            We have Total Completed 3600+ Projects in 1400+ Clients from Whole
            Over the World. We have total 50+ Ready Software
          </p>
          <FaHandPointDown className="up-icon mt-5" />
        </div> */}
      </Container>
    </div>
  );
};

export default MainHeader;
