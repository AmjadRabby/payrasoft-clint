import React from "react";
import { Container, Row } from "react-bootstrap";
import headerBaner from "../../../images/banner_image.png";
import MainNav from "./Navbar/MainNav";

const MainHeader = () => {
  return (
    <div className="main-header pt-2 pb-5">
      <MainNav/>
      <Container className="mt-5">
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
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img className="img-fluid header-img" src={headerBaner} alt="" />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainHeader;
