import React from "react";
import "./OurServices.css";

const Service = ({ service }) => {
  const { img, title, description } = service;
  return (
    <div className="col-md-4 col-sm-6 mb-5 text-center">
      <div className="service-item global-item bg-white shadow-sm p-3">
        <img src={img} alt="" className="img-fluid mb-2" />
        <h2 className="mb-2 text-secondary font-weight-bold brand-color-heading">
          {title}
        </h2>
        <p className="text-secondary">{description}</p>
        <button className="btn brand-btn mb-5">Read More</button>
      </div>
    </div>
  );
};

export default Service;
