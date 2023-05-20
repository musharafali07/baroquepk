import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Card, Col, Container, Row } from "react-bootstrap";

import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth";
import AdminMenu from "../../components/Layout/AdminMenu";
import Pie from "./Charts/Pie";
// import { ecomPieChartData } from "./data/dummy";

const Userfrom = () => {
  const [Users, setUsers] = useState([]);

  const ecomPieChartData = [
    { x: "2018", y: 18, text: "35%" },
    { x: "2019", y: 18, text: "15%" },
    { x: "2020", y: 18, text: "25%" },
    { x: "2021", y: 18, text: "25%" },
  ];

  //getall users
  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/auth/getlogin"
      );
      setUsers(data.Users);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Layout title={"Dashboard - Users Profile"}>
      <div className="mt-20">
        <Container fluid className="m-3 p-3">
          <Row>
            {/* <Col md={3}>
              <AdminMenu />
            </Col> */}
            <Col md={9}>
              {" "}
              <div className="p-3 md:p-4 mt-8">
                <div className="w-full max-w-lg bg-white m-auto flex  flex-col p-4">
                  <h1 className="text-center text-2xl font-bold">
                    USER PROFILE INFORMATION
                  </h1>
                  <Pie
                    id="pie-chart"
                    data={ecomPieChartData}
                    legendVisiblity={false}
                    height="160px"
                  />

                  {Users?.map((i) => (
                    <Card className="m-2">
                      <div className="card-body">
                        <h5 className="card-title">Name: {i.name}</h5>
                        <h5 className="card-title">Email: {i.email}</h5>
                        <h5 className="card-title">Phone: {i.phone}</h5>
                        <h5 className="card-title">Address: {i.address}</h5>
                        <h5 className="card-title">ANSWER: {i.answer}</h5>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Userfrom;
