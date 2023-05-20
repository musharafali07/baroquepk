import React from "react";
import "../../index.css";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { BsBagFill } from "react-icons/bs";
import { BsFillBasket3Fill } from "react-icons/bs";
import { BsFillLayersFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsPalette2 } from "react-icons/bs";

import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className=" pt-4">
        <div className="text-start m-0 p-0 ">
          <div className="text-black my-2  text-uppercase">
            <NavLink
              to="/dashboard/admin"
              className="text-decoration-none my-4 text-black "
            >
              <p className="d-flex">
                <BsFillHouseHeartFill className="fs-5" />
                <h6 className="text-black fs-6  px-2">Dashborad</h6>
              </p>
            </NavLink>

            <NavLink
              to="/dashboard/admin/create-category"
              className="text-decoration-none my-4 text-black "
            >
              <p className="d-flex">
                <BsFillLayersFill className="fs-5" />
                <h6 className="text-black fs-6  px-2">Create Category</h6>
              </p>
            </NavLink>

            <NavLink
              to="/dashboard/admin/create-product"
              className="text-decoration-none py-4 text-black"
            >
              <p className="d-flex">
                <BsFillBasket3Fill className="fs-5" />
                <h6 className="text-black fs-6  px-2">Create Product</h6>
              </p>
            </NavLink>
            <NavLink
              to="/dashboard/admin/products"
              className="text-decoration-none py-4 text-black"
            >
              <p className="d-flex">
                <BsBagFill className="fs-5" />

                <h6 className="text-black fs-6  px-2">Products</h6>
              </p>
            </NavLink>
            <NavLink
              to="/dashboard/admin/orders"
              className="text-decoration-none py-4 text-black"
            >
              <p className="d-flex">
                <BsPalette2 className="fs-5" />
                <h6 className="text-black fs-6  px-2">Orders</h6>
              </p>
            </NavLink>
            <NavLink
              to="/dashboard/admin/users"
              className="text-decoration-none py-4 text-black"
            >
              <p className="d-flex">
                <BsFillPeopleFill className="fs-5" />
                <h6 className="text-black fs-6  px-2">Users</h6>
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
