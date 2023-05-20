import React, { useState } from "react";
import "../../index.css";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [auth] = useAuth();

  const [open, setOpen] = useState(true);
  return (
    <Layout>
      <div className="  pt-5">
        <div className="container-fluid  ">
          <div className="row">
            <div className="col-md-3 dash">{open ? <AdminMenu /> : null}</div>


            <div className="col-md-9 mt-5">
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
