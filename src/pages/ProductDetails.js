import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaDollyFlatbed } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, Outlet } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";
import { Row, Col, Container } from "react-bootstrap";
const ProductDetails = () => {
  const [cart, setCart] = useCart();
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className=" container mt-5 pt-5 p-5">
        <div className="row m-0 p-4">
          <div className="col-md-6">
            <img
              src={`/api/v1/product/product-photo/${product._id}`}
              className="addtocart_img"
              alt={product.name}
            />
          </div>
          <div className="col-md-6 mt-2">
            <h5 className="text-start  text-uppercase fs-5">Product Details</h5>
            <hr />
            <h6 className="text-uppercase"> {product.name}</h6>
            <p className="text-uppercase">
              <b>Detail:</b> {product.description}
            </p>
            <h6 className="text-uppercase">
              Price:
              
                      <del className="text-warning  px-1">Rs.{product.oldprice} </del>
               
              {product?.price?.toLocaleString("en-US", {
                style: "currency",
                currency: "PKR",
              })}
            </h6>
            <hr />
            <p className="text-uppercase">
              {" "}
              <b>Category</b> : {product?.category?.name}
            </p>
            <hr />
            <div className="pt-3">
              <Link to="/swiss">
                <button class="border bg-black text-white px-3 py-2 ms-1 text-uppercase">
                  Back To Items
                </button>
              </Link>
              <button
                class="border bg-black text-white px-3 py-2 ms-1"
                onClick={() => {
                  setCart([...cart, product]);
                  localStorage.setItem("cart", JSON.stringify([...cart, product]));
                  toast.success("Item Added to cart");
                }}
              >
                ADD TO CART
              </button>
            </div>
            
            {/* <cartpop show={modalShow} onHide={() => setModalShow(false)} /> */}

            <br />
              <br />
              <div className="d-flex p-0">
                <p className=" ">ADD TO WISHLIST</p>
                <p className="px-3">ADD TO COMPARE</p>
              </div>
              <hr />

              <div className="">
                <p>SKU:N/A</p>
                <p>Category: Wash & Wear</p>
              </div>
              <hr />
              <div>
                <Link to="#" className="text-decoration-none text-black">
                  {" "}
                  <FaFacebookF className="fs-5" />{" "}
                </Link>
                <Link to="#" className="text-decoration-none text-black">
                  <FaInstagramSquare className="fs-5" />
                </Link>
                <Outlet />
              </div>

          </div>
        </div>
      </div>
      <hr />
      <div className="row container justify-content-center text-uppercase">
      <p className="text-lg text-medium">YOU MAY ALSO LIKE</p>
            {relatedProduct.length < 1 && (
              <p className="text-center">no similar products found</p>
            )}
            {/* {JSON.stringify(relatedProduct, null, 4)} */}
            <div className="flex justify-center">
              {relatedProduct?.map((p) => (
                <Col
                  className="card border-none rounded-[0px] mx-2"
                  xs={4}
                  sm={4}
                  md={4}
                  lg={4}
                  xl={4}
                  xxl={4}
                >
                  <img
                    src={`http://localhost:5000/api/v1/product/product-photo/${p?._id}`}
                    className="card-img-top rounded-[0px]"
                    alt={p.name}
                  />
                  <div className="card-body border-none rounded-[0px]">
                    <h5 className="card-title text-center cursor-pointer font-sans hover:text-black text-black p-0 m-0 font-normal text-sm md:text-base">
                      {p.name}
                    </h5>
                    <h5 className="card-title text-center font-sans  text-base md:text-lg font-bold hover:text-black cursor-pointer text-black p-0 m-0">
                      {p.price}
                    </h5>
                  </div>
                </Col>
              ))}
            </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
