import React from "react";

const Website = ({ website }) => {
  const { title, img } = website;
  return (
    <div className="col-md-4 text-center mb-5 h-100">
      <div className="p-1">
        <h4 className="brand-color mb-4">{title}</h4>
        <div className="overflow-hidden website-img mb-4">
          <img src={img} alt="" className="img-fluid global-item-img" />
        </div>

        <button className="btn brand-color-bg px-4">View Demo</button>
      </div>
    </div>
  );
};

export default Website;
