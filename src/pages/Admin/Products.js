import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import "../../index.css";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className=" pt-5 mt-2">
        <div className="container-fluid  ">
          <div className="row ">
            <div className="col-md-3 dash">
              <AdminMenu />
            </div>
            <div className="col-md-9 ">
              <h6 className="text-start text-uppercase fs-5 pt-4">
                All Products List
              </h6>
              <hr />{" "}
              <div className="d-flex flex-wrap">
                {products?.map((p) => (
                  <Link
                    key={p._id}
                    to={`/dashboard/admin/product/${p.slug}`}
                    className="product-link"
                  >
                    <div className="border m-2" style={{ width: "18rem" }}>
                      <img
                        src={`/api/v1/product/product-photo/${p._id}`}
                        className="card-img-top"
                        alt={p.name}
                      />
                      <div className="p-2">
                        <h5 className="text-uppercase pt-2">{p.name}</h5>
                        <h5 className="fs-6">
                          <del className="text-warning  px-1">
                            Rs.{p.oldprice}{" "}
                          </del>
                          {p.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "PKR",
                          })}
                        </h5>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </Layout>
  );
};

export default Products;
