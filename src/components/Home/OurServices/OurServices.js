import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { services } from "../../../data/data";
import Service from "./Service";

const OurServices = () => {
  const [service, setService] = useState(services);
  return (
    <div className="mb-5 pt-5 bg-light">
      <Container>
        <h1 className="text-center brand-color mb-5">OUR SERVICES</h1>
        <div className="row">
          {service.map((item) => (
            <Service key={item.servicesId} service={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurServices;
