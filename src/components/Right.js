import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { AiFillQuestionCircle } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/cart";
import { Badge } from "antd";

function Right(props) {
  const values = [true];
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState({});
  const [cart] = useCart();

  //intial product details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //set single product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
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
  return (
    <div className="bg-gray-100  m-0 p-0 ">
      {cart?.map((p) => (
        <>
          <div className="d-flex mb-4 ">
            <div className="border w-50 position-relative">
              <Badge
                count={p?.quantity}
                showZero
                className="md:block  hidden right-0 absolute"
              >
                <div
                  className="w-100 p-1  rounder-0  bg-white  "
                  style={{ border: "1px solid #dddddd " }}
                >
                  <img
                    className="w-100"
                    src={`http://localhost:5000/api/v1/product/product-photo/${p._id}`}
                  />
                </div>
              </Badge>
              {/* <p
                className="absolute bg-gray-500 px-[8px] py-[2px] text-white left-[48px] bottom-[53px] z-10"
                style={{ borderRadius: "68px" }}
              >
                {p.quantity}
              </p> */}
            </div>

            <div className="col pt-1 p-2 ">
           
              <p className="font-bold text-uppercase">{p.name}</p>
              <del className="font-bold text-uppercase">Rs.{p.oldprice}</del>
            
            </div>
            <div>
              <p className="item-center font-bold text-[13px] mt-4">
                Rs{p.price}
              </p>
            </div>
          </div>
        </>
      ))}

      {/* <hr className="mb-4  text-gray-500" />

      <div className="d-flex  justify-between">
        <input
          className="border-t border-l border-r border-b border-gray-300 py-2 pr-20  lg:grow-1 grow pl-3 text-gray-700  text-left "
          placeholder="Gift card or discount code"
        />
        <Button
          type="submit"
          className="bg-gray-300 border-[0px] pt-3 grow-1 pb-3 px-3 hover:bg-gray-300 focus:bg-gray-300 font-bold my-1 ml-4"
        >
          Apply
        </Button>
      </div> */}

      <hr className="mb-4  mt-4 text-gray-500" />

      <div className="flex justify-between">
        <p className="font-light text-[13px] text-gray-700">Subtotal </p>
        <p className="font-bold text-[13px] text-gray-700">{totalPrice()}</p>
      </div>

      <div className="flex justify-between">
        <p className="font-medium text-[13px] text-gray-700 relative">
          Shipping
          <AiFillQuestionCircle className="absolute top-[4%] left-14 text-lg " />
        </p>

        <p className="font-medium text-[13px] text-gray-700">
          Calculated at next step
        </p>
      </div>

      <hr className="mb-4  mt-4 text-gray-500" />

      <div className="flex justify-between">
        <p className="font-medium text-[16px] text-gray-700">Total</p>
        <p className="font-medium text-2xl text-gray-700">
          <span className="text-gray-500 text-[12px]">PKR </span>
          {totalPrice()}
        </p>
      </div>
    </div>
  );
}

export default Right;
