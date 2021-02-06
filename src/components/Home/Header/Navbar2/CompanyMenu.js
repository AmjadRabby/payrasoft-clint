import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { companyItem } from "./MenuItem";

const CompanyMenu = () => {
     const [click, setClick] = useState(false);
     const handleClick = () => setClick(!click);
    return (
      <div>
        <ul
          onClick={handleClick}
          className={
            click ? "dropdown-menu-item clicked" : "dropdown-menu-item"
          }
        >
          {companyItem.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className={item.cName}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
};

export default CompanyMenu;