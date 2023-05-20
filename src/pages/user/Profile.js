import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";
const Profile = () => {
  //context
  const [auth, setAuth] = useAuth();
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //get user data
  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/api/v1/auth/profile", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (data?.errro) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Your Profile"}>
               <div className=" pt-5 mt-2">
        <div className="container-fluid  ">
          <div className="row ">
            <div className="col-md-3 dash">
            <UserMenu />
          </div>
          <div className="col-md-8">
          <div className=" w-75 p-3">
                <h4 className="text-uppercase">Profile information</h4>
                <hr />
                <p className="text-uppercase">
                  {" "}
                  Admin Name : {auth?.user?.name}
                </p>
                <p> ADMIN EMIAL : {auth?.user?.email}</p>
                <p className="text-uppercase">
                  {" "}
                  Admin Contact : {auth?.user?.phone}
                </p>
                <p className="text-uppercase">
                  {" "}
                  Admin ADDRESS : {auth?.user?.address}
                </p>
                <Link to="/dashboard/user/updateprofile">
                  <button
                    type="submit"
                    className="border bg-black text-white py-2 px-3"
                  >
                    UPDATE
                  </button>
                </Link>
                <br /> <hr />
              </div>
            <br />
        
          </div>
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
