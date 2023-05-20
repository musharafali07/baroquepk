import React from "react";
// import Card from "react-bootstrap/Card";
// import Card from "./Card/Card";
// import { Link } from "react-router-dom";

import { FaRegArrowAltCircleRight } from "react-icons/fa";
function Newsletter() {
    return (
        <div class="container pt-5 pb-5">
            <div class="row">
                <div class="col-md-6">
                    <img src="./image/n1.jpg" className="w-100" alt="" />
                </div>
                <div class="col-md-6">
                    <div className="bg-danger text-center text-white rounded-3 m-2 p-5">
                        <h2 className="pt-5 fs-5 mt-4">GET 5% OFF!</h2>
                        <p className="p-2">
                     SING UP NOW TO OUR NEWSLETTER
                        </p>
                        <div className="pb-5">
                        <input type="email" className="p-1 focus:outline-none" placeholder="Enter your email here" />
                        <FaRegArrowAltCircleRight className="fs-5 m-2" />
                   </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Newsletter;
