import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaDollyFlatbed } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="bg-secondary-subtle text-black py-5 mt-3 ">
        <div class="container fs-6 text-white text-center  w-100">
          <div className=" text-black mx-5 py-4">
            <Link to="/about" className="text-decoration-none">WHOE WE ARE </Link> |{" "}
            <Link to="/contact" className="text-black text-decoration-none">
              CONTACT US{" "}
            </Link>{" "}
            |
            <Link to="" className="text-black text-decoration-none">
              {" "}
              WHOE WE ARE
            </Link>{" "}
            | <Link to="/about" className="text-decoration-none"> ABOUT US</Link> |<Link to="/cart" className="text-decoration-none"> CART </Link> |{" "}
            <Link to="" className="text-black text-decoration-none">
              ORDER CANCELLATION FORM{" "}
            </Link>{" "}
            |
            <Link to="" className="text-black text-decoration-none">
              {" "}
              TRACK YOUR ORDER
            </Link>{" "}
            |{" "}
            <Link to="" className="text-black text-decoration-none">
              {" "}
              SERVICE WE PROVIDE
            </Link>{" "}
            |
            <Link to="" className="text-black text-decoration-none">
              {" "}
              CAREERS
            </Link>{" "}
            | <Link className="text-decoration-none"> LEGAL</Link> |{" "}
            <Link to="" className="text-black text-decoration-none">
              {" "}
              FAQ'S
            </Link>{" "}
            |
            <Link to="policy" className="text-black text-decoration-none">
              {" "}
              PRIVACY & POLICY
            </Link>
          </div>
          <div className="py-2">
            <FaDollyFlatbed className="text-black m-1" />
            <FaFacebookF className="text-black m-1" />
            <FaInstagramSquare className="text-black m-1" />
          </div>
        </div>
      </footer>
      <div className="bg-black text-center py-3 text-white fs-6">
        ALL RIGHT RESERVED TO BAROQUE 2023
      </div>
    </>
  );
}

export default Footer;
