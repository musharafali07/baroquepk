import React from "react";
// import Card from "react-bootstrap/Card";
import Card from "./Card";
import { Link } from "react-router-dom";

function Collection() {
  return (
    <div className=" mt-5">
      <div class="container  justify-content-center text-center ">
        <div class="row p-0 m-0">
          <div class="col-md-4">
            <Link to="/swiss" className="text-decoration-none">
              <Card
                imgUrl2="./images/swiss.jpg"
                img="./images/wear.jpg"
                title="SWISS LAWN"
              />
              <button className=" fs-6 mb-4 border-0 bg-black text-white py-1 px-2 m-1 text-uppercase">
                shop now
              </button>
            </Link>
          </div>
          <div class="col-md-4">
            <Link to="/swiss" className="text-decoration-none">
              <Card
                imgUrl2="./images/dupattas.jpg"
                img="./images/swiss.jpg"
                title="WASH & WEAR"
              />
                <button className=" fs-6 mb-4 border-0 bg-black text-white py-1 px-2 m-1 text-uppercase">
                shop now
              </button>
            </Link>
          </div>
          <div class="col-md-4">
            <Link to="/swiss" className="text-decoration-none">
              <Card
                imgUrl2="./images/swiss.jpg"
                img="./images/dupattas.jpg"
                title="DUPATTAS"
              />
                <button className= " fs-6 mb-4 border-0 bg-black text-white py-1 px-2 m-1 text-uppercase">
                shop now
              </button>
            </Link>
          </div>
        </div>
        <div class="row m-0 p-0">
          <div class="col-md-4">
            <Link to="/swiss" className="text-decoration-none">
              <Card
                imgUrl2="./images/swiss.jpg"
                img="./images/chantele.jpg"
                title="CHANTELLE"
              />
                <button className=" fs-6 mb-4 border-0 bg-black text-white py-1 px-2 m-1 text-uppercase">
                shop now
              </button>
            </Link>
          </div>
          <div class="col-md-4">
            <Link to="/swiss" className="text-decoration-none">
              <Card
                imgUrl2="./images/swiss.jpg"
                img="./images/bottoms.jpg"
                title="BOTTOMS"
              />
                <button className=" fs-6 mb-4 border-0 bg-black text-white py-1 px-2 m-1 text-uppercase">
                shop now
              </button>
            </Link>
          </div>
          <div class="col-md-4">
            <Link to="/swiss" className="text-decoration-none">
              <Card
                imgUrl2="./images/swiss.jpg"
                img="./images/special.jpg"
                title="SPECIAL PRICE"
              />
                <button className="fs-6 border-0 bg-black mb-4 text-white py-1 px-2 m-1 text-uppercase">
                shop now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
