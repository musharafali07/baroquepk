import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useCart } from "../../context/Cart";
import { useAuth } from "../../context/Author";
import { GrFormClose } from "react-icons/gr";

import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import { toast } from "react-toastify";

import { RiDeleteBinLine } from "react-icons/ri";
import { Outlet, Link } from "react-router-dom";
// import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CheckOut from "../Page5/CheckOut";
import Cart_PopUp from "./Cart_PopUp";
import Layout from "../../Main_Component/Layout";

function viewcart() {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const [cart1, setC] = useState([]);

  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  //total
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((p) => {
        total += p.quantity * p.price;
      });
      return total.toLocaleString("PAK", {
        style: "currency",
        currency: "PKR",
      });
    } catch (error) {
      console.log(error);
    }
  };

  //chnge hndle
  const handleChange = (p, d) => {
    // console.log(p,d)
    const ind = cart.indexOf(p);
    const arr = cart;
    arr[ind].quantity += d;
    if (arr[ind].quantity === 0) arr[ind].quantity = 1;
    setC([...arr]);
  };

  //delete item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"Your Shopping Cart - BAROQUE"}>
      <div className="mt-20 container">
        <div>
          {/* <div className="row">
          <h2 className="text-center ">
            {`Hello ${auth?.token && auth?.user?.name}`}
          </h2>
          <h4 className="text-center">
            {cart?.length
              ? `You have ${cart.length} items in your cart ${
                  auth?.token ? "" : "please login to checkout"
                }`
              : " Your Cart Is Empty"}
          </h4>
        </div> */}
          <div className="mt-20">
            <div>
              <div className="flex justify-between items-baseline px-4 py-6">
                <p className="text-[30px] md:text-[40px] font-medium self-center">
                  YOUR CART
                </p>
                <Link to={`/`} className="cursor-pointer ">
                  <p className="cursor-pointer text-center py-2 pb-5 underline text-black underline-offset-2 font-medium text-[15px] tracking-wider ">
                    CONTINUE SHOPPING
                  </p>
                </Link>
              </div>
              <div className="flex px-4 pb-2 items-baseline">
                <p className="text-gray-600 text-[14px] flex grow-[4]">
                  PRODUCT
                </p>
                <p className="text-gray-600 text-[14px]  grow-[1] text-center justify-self-center hidden md:block ">
                  QUANTITY
                </p>
                <p className="text-gray-600 text-[14px]  grow-[1] text-right justify-self-end">
                  TOTAL
                </p>
              </div>
              <hr />
              {cart?.map((p) => (
                <div className="flex px-4 py-4">
                  {" "}
                  <div className="w-[148px] ">
                    <img
                      src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top "
                      alt={p.name}
                    />{" "}
                  </div>
                  <div className=" grow-[2]">
                    <p className="text-[17px] font-medium px-6 pb-2 hover:underline cursor-pointer underline-offset-2 decoration-2">
                      {p.name}
                    </p>
                    <p className="text-gray-600 text-[15px] px-6 pb-2">
                      PKR {p.price}
                    </p>
                    <p className="text-gray-600 text-[15px] px-6 pb-2">
                      Type:{p.description}
                    </p>
                    <p className="text-gray-600 text-[15px] px-6 pb-2">
                      Custom_Color: PRINTED
                    </p>

                    <div className="flex flex-wrap grow-[1]  relative items-baseline justify-start md:hidden block">
                      <p className="">
                        <button
                          className="px-2 py-1 ml-9 border-b border-l  border-t border-black cursor-pointer text-gray-500"
                          onClick={() => handleChange(p, -1)}
                        >
                          -
                        </button>
                        <button className=" px-2 py-1 border-b border-l border-r border-t border-black  font-bold">
                          {p.quantity}
                        </button>
                        <button
                          className="text-gray-500 px-2 py-1 border-b  border-r border-t border-black cursor-pointer"
                          onClick={() => handleChange(p, +1)}
                        >
                          +
                        </button>
                      </p>
                      <p>
                        <RiDeleteBinLine
                          onClick={() => removeCartItem(p._id)}
                          className="text-[20px] mt-1 cursor-pointer ml-3 absolute top-0 left-[106px]"
                        />
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap grow-[1]  relative items-baseline justify-start hidden md:block">
                    <p className="">
                      <button
                        className="px-2 py-1 ml-9 border-b border-l  border-t border-black cursor-pointer text-gray-500"
                        onClick={() => handleChange(p, -1)}
                      >
                        -
                      </button>
                      <button className=" px-2 py-1 border-b border-l border-r border-t border-black  font-bold">
                        {p.quantity}
                      </button>
                      <button
                        className="text-gray-500 px-2 py-1 border-b  border-r border-t border-black cursor-pointer"
                        onClick={() => handleChange(p, +1)}
                      >
                        +
                      </button>
                    </p>
                    <p>
                      <RiDeleteBinLine
                        onClick={() => removeCartItem(p._id)}
                        className="text-[20px] mt-1 cursor-pointer ml-3 absolute top-0 left-[106px]"
                      />
                    </p>
                  </div>
                  <div className=" text-gray-600 text-[16px]">
                    <p>PKR {p.price}</p>
                  </div>
                </div>
              ))}

              <hr />
              <div className=" xs:text-center sm:text-center md:text-right px-4 py-6">
                <p className=" py-2 text-black underline-offset-2 my-2 font-medium text-[16px] tracking-wider ">
                  SUBTOTAL
                  <span className="text-gray-600 text-[16px] ml-3">
                    {totalPrice()}
                  </span>
                </p>
                <p className="text-gray-600 text-[14px] my-2">
                  Taxes and{" "}
                  <span className="underline cursor-pointer hover:decoration-2 underline-offset-4 ">
                    shipping{" "}
                  </span>
                  calculated at checkout
                </p>

                <button className="w-96 border-black border-l border-r border-t border-b my-2 px-2 py-[10px] text-white bg-black mb-2 text-center font-bold text-[16px] cursor-pointer ">
                  <Link to="/checkout">CHECKOUT </Link>
                </button>

                {/* {values.map((v, idx) => (
                  <button
                    key={idx}
                    className="w-96 border-black border-l border-r border-t border-b my-2 px-2 py-[10px] text-white bg-black mb-2 text-center font-bold text-[16px] cursor-pointer "
                    onClick={() => handleShow(v)}
                  >
                    CHECKOUT{" "}
                    {typeof v === "string" && `below ${v.split("-")[0]}`}
                  </button>
                ))}
                <Modal
                  show={show}
                  fullscreen={fullscreen}
                  onHide={() => setShow(false)}
                  className="absolute top-0 p-0 m-0 "
                >
                  <CheckOut />
                </Modal> */}
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default viewcart;
