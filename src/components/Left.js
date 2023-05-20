import React, { useState, useEffect } from "react";
import { GrNext } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
// import "../../styles.css";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useCart } from "../context/cart";
import { Badge } from "antd";

function Left(props) {
  const [validated, setValidated] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const navigate = useNavigate();
  const values = [true];
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

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   console.log(form);
  //   setValidated(true);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/checkForm/post-checkForm`,
        {
          firstname,
          lastname,
          email,
          phone,
          address,
          city,
          postalcode,
        }
      );
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }

      setValidated(true);

      if (res.data.success) {
        toast.success("Infomation store Successfully");
      } else {
        toast.error("res.data.message");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error while information");
    }
  };

  const iconRemove = "bg-none";

  const [open, setOpen] = useState(false);
  const [openIcon, setOpenIcon] = useState(<BsChevronDown />);
  const [openStatment, setOpenStatment] = useState("Show order summary");

  const handler = () => {
    setOpen(!open);
    setOpenStatment(
      openStatment === "Show order summary"
        ? "Hide order summary"
        : "Show order summary"
    );
    setOpenIcon(
      openIcon == <BsChevronDown /> ? <BsChevronUp /> : <BsChevronDown />
    );
  };

  return (
    <div className="w-75  p-4" iconRemove={iconRemove}>
      <>
        <div className="">
          <Link to="/">
            <img className="w-25" src="https://cdn.shopify.com/s/files/1/2277/5269/files/unnamed__1_-removebg-preview.png?31696" />
          </Link>
        </div>
        <div
          className="flex justify-between items-center border-t border-b py-3 mt-4 lg:hidden"
          onClick={handler}
        >
          {/* <div className="flex  items-center gap-2 ml-[10%] ">
            <p className="text-lg text-cyan-600">
              <FiShoppingCart />
            </p>
            <p className=" text-base text-cyan-600">{openStatment}</p>
            <p className=" text-lg text-cyan-600">{openIcon}</p>
          </div>{" "} */}
          {/* <div className="mr-[10%] ">
            <p className="text-lg">{totalPrice()}</p>
          </div> */}
        </div>

        {open ? (
          <div className="bg-gray-100 border-b lg:hidden">
            {cart?.map((p) => (
              <div className="flex mb-4 pt-7  ml-[10%] mr-[10%]">
                <div className="relative ">
                  <Badge
                    count={p?.quantity}
                    showZero
                    className="md:block hidden right-0 absolute"
                  >
                    <div
                      className="w-[70px] h-[68px] rounder-[200px] overflow-hidden bg-white border-gray-500 absolute"
                      style={{
                        borderRadius: "11px",
                        border: "1px solid #dddddd",
                      }}
                    >
                      {" "}
                      <img
                        className="w-25 "
                        src={`http://localhost:5000/api/v1/product/product-photo/${p._id}`}
                      />
                    </div>
                  </Badge>
                  {/* <p
                className="absolute bg-gray-500 px-[8px] py-[2px] text-white left-[48px] bottom-[42px] z-10"
                style={{ borderRadius: "68px" }}
              >
                1
              </p> */}
                </div>

                <div className="col pt-1 ">
                  <p className="font-bold ">{p.name}</p>
                  <p className="font-light  text-gray-600">{p.description}</p>
                  <p className="font-light  text-gray-600">
                    Custom_Color: PRINTED
                  </p>
                </div>
                <div>
                  <p className="item-center font-bold text-[13px] mt-4">
                    {p.price}
                  </p>
                </div>
              </div>
            ))}

            <hr className="mb-4  text-gray-500 ml-[10%] mr-[10%]" />

            <div className="flex  justify-between ml-[10%] mr-[10%]">
              <input
                className="border-t border-l border-r border-b border-gray-300 py-3 pr-20  lg:grow-1 grow pl-3 text-gray-700  text-left "
                placeholder="Gift card or discount code"
              />
              <Button className="bg-gray-300 border-[0px] pt-3 grow-1 pb-3 px-3 hover:bg-gray-300 focus:bg-gray-300 font-bold my-1 ml-4">
                Apply
              </Button>
            </div>

            <hr className="mb-4  mt-4 text-gray-500 ml-[10%] mr-[10%]" />

            <div className="flex justify-between ml-[10%] mr-[10%]">
              <p className="font-light text-[13px] text-gray-700">Subtotal </p>
              <p className="font-bold text-[13px] text-gray-700">
                {totalPrice()}
              </p>
            </div>

            <div className="flex justify-between ml-[10%] mr-[10%]">
              <p className="font-medium text-[13px] text-gray-700 relative">
                Shipping
                <AiFillQuestionCircle className="absolute top-[4%] left-14 text-lg " />
              </p>

              <p className="font-medium text-[13px] text-gray-700">
                Calculated at next step
              </p>
            </div>

            <hr className="mb-4  mt-4 text-gray-500 ml-[10%] mr-[10%]" />

            <div className="flex justify-between ml-[10%] mb-4 mr-[10%]">
              <p className="font-medium text-[16px] text-gray-700">Total</p>
              <p className="font-medium text-2xl text-gray-700">
                <span className="text-gray-500 text-[12px]">PKR </span>
                {totalPrice()}
              </p>
            </div>
          </div>
        ) : null}

        <div className="flex justify-items-basline items-center py-7  lg:ml-[10%] ml-[10%] mr-[10%]">
          <span className="text-blue-500 cursor-pointer mx-1 text-[13px]">
            Cart
          </span>{" "}
          <GrNext className="mx-1 text-gray-400 font-medium text-14px]" />{" "}
          <span className="text-[13px]">Information</span>{" "}
          <GrNext className="mx-1 text-gray-400 font-medium text-14px]" />{" "}
          <span className="text-[13px] text-gray-600">Shipping</span>{" "}
          <GrNext className="mx-1 text-gray-400 font-medium text-14px]" />
          <span className="text-[13px] text-gray-600">Payment</span>
        </div>

        <div className="d-flex pt-4 justify-between  font-sans  text-gray-800 ">
          <p className="fs-5 w-50 ">Contact information</p>
          <p className="text-end w-50">
            Already have an account?
            <span className="text-blue-500 cursor-pointer">
              <Link to="/login">Log in</Link>
            </span>
          </p>
        </div>
      </>

      <div className="">
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          iconRemove={iconRemove}
        >
          <Row className="m-0 p-0">
            <Form.Control
              type="email"
              placeholder="Email"
              className="rounded-0 focus:rounded-0 py-2 bg-none"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback
              type="invalid"
              className="pt-2 px-0 m-0 bg-none"
            >
              Enter a valid email
            </Form.Control.Feedback>
            <p className="px-0 mx-0 my-2 text-gray-700">
              Email me with news and offers
            </p>
          </Row>

          <p className="fs-5 mt-4 mb-2">Shipping address</p>

          <Row className="m-0 px-0 py-2 ">
            <Col className="p-0 my-0 mr-1">
              <Form.Control
                type="text"
                placeholder="
                First name
                "
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
                className="rounded-0 focus:rounded-0 py-2  "
                required
              />
              <Form.Control.Feedback type="invalid" className="pt-2 px-0 m-0">
                Enter a first name
              </Form.Control.Feedback>
            </Col>
            <Col className="p-0 my-0 ml-1">
              <Form.Control
                type="text"
                placeholder="
                Last name
                "
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
                className="rounded-0 focus:rounded-0 py-2 mx-1  "
                required
              />
              <Form.Control.Feedback type="invalid" className="pt-2 px-0 m-0">
                Enter a last name
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row className="m-0 px-0 py-2">
            <Form.Control
              type="address"
              placeholder="Address"
              className="rounded-0 focus:rounded-0 py-2  "
              required
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
            <Form.Control.Feedback type="invalid" className="pt-2 px-0 m-0">
              Enter an address
            </Form.Control.Feedback>
          </Row>

          <Row className="m-0 py-2 px-0">
            <Form.Control
              type="text"
              placeholder="Apartment, suite, etc. (optional) "
              className="rounded-0 focus:rounded-0 py-2 focus:outline-0 "
            />
          </Row>

          <Row className="m-0 px-0 py-2 ">
            <Col className="p-0 my-0 mr-1">
              <Form.Control
                type="city"
                placeholder="
                City
                "
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="rounded-0 focus:rounded-0 py-2  "
                required
              />
              <Form.Control.Feedback type="invalid" className="pt-2 px-0 m-0">
                Enter a city
              </Form.Control.Feedback>
            </Col>
            <Col className="p-0 my-0 ml-1">
              <Form.Control
                type="number"
                placeholder="
                Postal Code
                "
                onChange={(e) => setPostalcode(e.target.value)}
                value={postalcode}
                className="rounded-0 focus:rounded-0 py-2 mx-1 "
              />
            </Col>
          </Row>

          <Row className="m-0 px-0 py-2">
            <Form.Control
              type="phone"
              placeholder="Phone"
              className="rounded-0 focus:rounded-0 py-2 outline-2 transition-none "
              required
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <Form.Control.Feedback type="invalid" className="pt-2 px-0 m-0">
              Enter a phone number to use this delivery method
            </Form.Control.Feedback>
            <p className="px-0 mx-0 my-2 text-gray-700">
              Save this information for next time
            </p>
          </Row>

          <div className="my-5 relative d-flex justify-between item-center cursor-pointer">
            <IoIosArrowBack className="mt-1  text-blue-500" />
            <p
              className="text-blue-500 mx-2 pb-1 "
              onclick={() => {
                navigate("/cart");
              }}
            >
              Return to cart
            </p>
            <Link to="/payment" className="w-75 text-end">
              <Button
                type="submit"
                className="rounded-0 bg-black text-white py-2 px-3 font-bold"
                onClick={() => "/payment"}
              >
                Continue to shipping
              </Button>
            </Link>
          </div>
        </Form>

        
      </div>
    </div>
  );
}

export default Left;
