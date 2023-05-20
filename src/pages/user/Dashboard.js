import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Baroque Pk"}>
      <div className=" pt-5 mt-2">
        <div className="container-fluid  ">
          <div className="row ">
            <div className="col-md-3 dash">
              <UserMenu />
            </div>
            <div className="col-md-9">
            <div className="col-md-8">
     
            <div className=" w-75 p-3">
                <h4 className="text-uppercase">Profile information</h4>
                <hr />
                <p className="text-uppercase">
                  {" "}
                   Name : {auth?.user?.name}
                </p>
                <p>  EMIAL : {auth?.user?.email}</p>
                <p className="text-uppercase">
                  {" "}
                   Contact : {auth?.user?.phone}
                </p>
                <p className="text-uppercase">
                  {" "}
                   ADDRESS : {auth?.user?.address}
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
      </div>
    </Layout>
  );
};

export default Dashboard;
