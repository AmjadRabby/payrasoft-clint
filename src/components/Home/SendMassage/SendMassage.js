import React from "react";
import { Container } from "react-bootstrap";
import "./SendMassage.css";
import { FaComments, FaSmile, FaPhoneAlt } from "react-icons/fa";

const SendMassage = () => {
  return (
    <div className="mb-5 ">
      <div className="brand-color-bg  p-4">
        <Container>
          <div className="row">
            <div className="col-md-4 col-md-4 col-sm-4 d-flex align-items-center justify-content-center">
              <FaComments className="comments-icon social-media" /> HAVE
              QUESTIONS? ASK A <br /> SPECIALIST
            </div>
            <div className="col-md-4 col-sm-4 d-flex align-items-center justify-content-center">
              <FaSmile className="smile-icon" />
              24/7 CALL US
            </div>
            <div className="col-md-4 col-md-4 col-sm-4 d-flex align-items-center justify-content-center">
              <FaPhoneAlt className="phone-icon" />
              01866776970
            </div>
          </div>
        </Container>
      </div>

      <div className="brand-color-bg  w-25 rounded-bottom m-auto p-2 text-center">
        SEND A MASSAGE
      </div>
    </div>
  );
};

export default SendMassage;
