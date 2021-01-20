import React, { useState } from "react";
import "./OurSoftware.css";
import { Container } from "react-bootstrap";
import { softwareData } from "../../../data/data";
import SoftwareInfo from "./SoftwareInfo";

const OurSoftware = () => {
  const [software, setSoftware] = useState(softwareData);
  return (
    <Container className="mb-5">
      <h1 className="brand-color text-center mb-5">OUR SOFTWARE</h1>
      <div className="row">
        {software.map((item) => (
          <SoftwareInfo key={item.id} software={item} />
        ))}
      </div>
      <div className="bg-light text-center mb-5 ">
        <h6 className="brand-btn rounded p-2"> VIEW OUR ALL SOFTWARE</h6>
      </div>
    </Container>
  );
};

export default OurSoftware;
