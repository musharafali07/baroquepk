import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import toast from "react-hot-toast";

import { useAuth } from "../../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Register - Ecommer App">
   

      <div className="container p-5 m-0">
        <div className="row mt-5 pt-5">
          <div className="col-md-8">
              <div className=" " >
        <form onSubmit={handleSubmit}>
          <h4 className="fs-4 py-3">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              autoFocus
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

          <button type="submit" className="bg-black text-white py-2 border w-75 rounded-0 border-b-2">
            LOGIN
          </button>
          <div className="mb-3">
            <button
              type="button"
              className="text-uppercase mt-2 py-2 border w-75 rounded-0 border-b-2"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>
        </form>
      </div>
          </div>
          <div className="col-md-4 pt-5">
            <Link to="/register">
              <button
                type="button"
                className="border text-uppercase bg-black text-white px-4 w-100  py-2 rounded-0 "
              >
                register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
