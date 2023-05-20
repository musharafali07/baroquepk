import React from "react";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { BsHddNetworkFill } from "react-icons/bs";
// import { BsFillLayersFill } from "react-icons/bs";
// import {BsFillPeopleFill  } from "react-icons/bs";
// import { BsPalette2 } from "react-icons/bs";

import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <div>
      <div className="text-center dashboard-menu">
        <div className="pt-4">
        <p className="d-flex">
              <BsFillHouseHeartFill className="fs-5" />
              <h6 className="text-black  fs-6  px-2">Dashborad</h6>
            </p>
          <NavLink
            to="/dashboard/user/profile"
            className="text-decoration-none my-4 text-black "
          >
          <p className="d-flex">
              <BsFileEarmarkPersonFill className="fs-5" />
              <h6 className="text-black  fs-6  px-2">Profile</h6>
            </p>
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="text-decoration-none my-4 text-black "
          >
              <p className="d-flex">
              <BsHddNetworkFill className="fs-5" />
              <h6 className="text-black  fs-6  px-2">Orders</h6>
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
