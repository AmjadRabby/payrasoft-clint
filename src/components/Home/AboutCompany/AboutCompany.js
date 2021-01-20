import React from "react";
import "./AboutCompany.css";
import { Container } from "react-bootstrap";
import company from "../../../images/about-payra-soft.png";

const AboutCompany = () => {
  return (
    <div>
      <Container className="mb-3">
        <div className="row">
          <div className="col-md-6">
            <h2 className="brand-color mb-4">ABOUT OUR COMPANY</h2>
            <p className="text-secondary mb-5">
              We have been providing information technology (IT) service in
              Bangladesh. We aim to providing professional quality IT service in
              all over the Bangladesh. We have Total Completed 3600+ Projects in
              1400+ Clients from Whole Over the World. We have total 50+ Ready
              Software​. <br /> Nowadays, Information technology is unavoidable
              part of our daily life. Life is busy we have to make it easy by
              using technology. If we want to develop our country we have use
              technology as much as we can. So we want to contribute in our IT
              sector.
            </p>
            <button className="btn brand-color-bg mb-5">READ MORE</button>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            {/* <img
              className="img-fluid about-img global-item p-1"
              src={company}
              alt=""
            /> */}
            <iframe
            className="rounded mb-5"
              width="500"
              height="315"
              src="https://www.youtube.com/embed/_39W4PIFCXA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutCompany;
