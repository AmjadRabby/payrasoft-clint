import React, { useState } from "react";
import { Link } from "react-router-dom";
import { serviceItem } from "./MenuItem";

const DropdownMenu = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu-item clicked" : "dropdown-menu-item"}
      >
        {serviceItem.map((item, index) => {
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
    </>
  );
};

export default DropdownMenu;

// export const DemoMenu = () => {
//   return (
    
//   );
// };

// export const CompanyMenu = () => {
//   return (
//     <div>
//       <ul
//         onClick={handleClick}
//         className={click ? "dropdown-menu-item clicked" : "dropdown-menu-item"}
//       >
//         {serviceItem.map((item, index) => {
//           return (
//             <li key={index}>
//               <Link
//                 to={item.path}
//                 className={item.cName}
//                 onClick={() => setClick(false)}
//               >
//                 {item.title}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };
