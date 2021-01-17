import React from "react";

const SoftwareInfo = ({ software }) => {
  const { title, description } = software;
  return (
    <div className="col-md-4 mb-4">
      <div className="card global-item shadow-sm text-center bg-light border-0 p-2 software-card">
        <div className="card-header p-0 pt-3 px-3 border-0 bg-transparent">
          <h5 className="card-title m-0 mx-3 brand-color-heading">{title}</h5>
        </div>
        <div className="card-body">
          <p className="card-text text-secondary">{description}</p>
        </div>
        <div className="card-footer border-0 bg-transparent">
          <button className="btn brand-btn border-0 mr-2  px-4">Buy Now</button>
          <button className="btn brand-btn border-0 px-4">View More</button>
        </div>
      </div>
    </div>
  );
};

export default SoftwareInfo;
