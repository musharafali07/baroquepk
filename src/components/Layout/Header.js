import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { FaDollyFlatbed } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
// import { FaListUl } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { BsDatabaseFillSlash } from "react-icons/bs";
import { BsTextLeft } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";

const Header = () => {
  const [togle, settogle] = useState(1);
  const [sidebar, setsidebar] = useState(false);
  const showsidebar = () => setsidebar(!sidebar);
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  function onchange(id) {
    settogle(id);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="">
            <Link to="/" className="navbar-brand">
              <BsTextLeft className="fs-4" />
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link
              to="/"
              className="navbar-brand justify-content-center text-center w-50"
            >
              <img src="./images/favicon.png" alt="" className=" " />
            </Link>

            <div
              className={
                sidebar
                  ? "justify-center duration-1000	 top-0 nav-menu -left-20 active  w-96  h-screen bg-cover bg-fixed bg-white	 pl-4 "
                  : "nav-menu "
              }
            >
              <div className=" w-100">
                <BsXLg className="m-3 text-xl" onClick={showsidebar} />

                <div className="main_link list-none pt-10 text-sm ">
                  <Link to="/men">
                    <li className="p-2" >
                      MEN
                    </li>
                  </Link>
                  <Link to="/">
                    <li className="p-2" >
                      WOMEN
                    </li>{" "}
                  </Link>
                  <Link to="/kid">
                    <li className="p-2" >
                      KIDS
                    </li>
                  </Link>
                </div>

              </div>
            </div>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput />
              {/* <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li> */}
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li> */}
              <div className="px-3 d-flex">
                {!auth?.user ? (
                  <>
                    <li className="nav-item">
                      <NavLink to="/register" className="nav-link">
                        Register
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/login" className="nav-link">
                        Login
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{ border: "none" }}
                      >
                        {auth?.user?.name}
                      </NavLink>
                      <ul className="dropdown-menu rounded-0">
                        <li>
                          <NavLink
                            to={`/dashboard/${
                              auth?.user?.role === 1 ? "admin" : "user"
                            }`}
                            className="text-black text-decoration-none pt-3"
                          >
                            <p className="d-flex px-2">
                              <BsFillHouseHeartFill className="fs-6" />
                              <h6 className="text-black  p-0  m-0 fs-6  px-2">
                                Dashborad
                              </h6>
                            </p>
                          </NavLink>
                        </li>
                        <hr />
                        <li>
                          <NavLink
                            onClick={handleLogout}
                            to="/login"
                            className="
                            text-black text-decoration-none  pt-3"
                          >
                            <p className="d-flex px-2">
                              <BsDatabaseFillSlash className="fs-6" />
                              <h6 className="text-black fs-6 p-0 m-0 px-2">
                                Logout
                              </h6>
                            </p>
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </>
                )}
              </div>
              <div className="m-0 p-0">
                <Link to="/checkout" className=" p-0 m-0 text-decoration-none">
                  <FaDollyFlatbed className="text-black fs-5 mt-2 p-0 m-0" />{" "}
                </Link>
                <Link to="#" className=" p-0 m-0 text-decoration-none">
                  {" "}
                  <FaFacebookF className="text-black fs-5 mt-2 p-0 m-0" />{" "}
                </Link>
                <Link to="#" className=" p-0 m-0 text-decoration-none">
                  <FaInstagramSquare className="text-black fs-5 mt-2 p-0 m-0" />
                </Link>

                <Link
                  to="/cart"
                  className="text-decoration-none"
                  showZero
                  offset={[10, -5]}
                >
                  <button
                    type="text"
                    class="bg-none position-relative text-black  border-0 m-0 p-0 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className=" pt-2 text-6xl"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-white bg-black">
                      {cart.length}
                    </span>
                  </button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
