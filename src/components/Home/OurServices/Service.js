import React from "react";
import './OurServices.css'

const Service = ({ service }) => {
  const { serviceId, title, description } = service;
  return (
    <div className="col-md-4 mb-5 text-center">
      <div className="service-item global-item bg-white shadow-sm p-4">
        <h3 className="mb-3 text-secondary brand-color-heading">{title}</h3>
        <p className="text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default Service;
