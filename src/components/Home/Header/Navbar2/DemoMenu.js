import React, { useState } from "react";
import { Link } from "react-router-dom";
import { demoItem } from "./MenuItem";
import { FaHome } from "react-icons/fa";

const DemoMenu = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <ul
        onClick={handleClick}
        className={
          click ? "dropdown-menu-item clicked" : "dropdown-menu-item row p-2"
        }
      >
        {demoItem.map((item, index) => {
          return (
            <li className="mr-4" key={index}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setClick(false)}
              >
                <FaHome className="mr-2" />
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DemoMenu;
