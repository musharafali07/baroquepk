import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import "../../styles/AuthStyles.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Baroque PK">
      <div className="container p-5 m-0">
        <div className="row mt-5 pt-5">
          <div className="col-md-8">
            <div className="">
              <form onSubmit={handleSubmit}>
                <h4 className="text-uppercase fs-4 py-3">REGISTER FORM</h4>
                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control w-75 rounded-0 border-b-2"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Name"
                    required
                    autoFocus
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control w-75 rounded-0 border-b-2"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Email "
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control w-75 rounded-0 border-b-2"
                    id="exampleInputPassword1"
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control w-75 rounded-0 border-b-2"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Phone"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control w-75 rounded-0 border-b-2"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Address"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="form-control w-75 rounded-0 border-b-2"
                    id="exampleInputEmail1"
                    placeholder="What is Your Favorite sports"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="border bg-black text-white px-4 w-75 py-2 rounded-0 "
                >
                  REGISTER
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-4 pt-5">
            <Link to="/login">
              <button
                type="button"
                className="border text-uppercase bg-black text-white px-4 w-100  py-2 rounded-0 "
              >
                login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
