import React from "react";
// import { Link } from "react-router-dom";
// import "./Card.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function Card(props) {
  const [imgState, setimgState] = useState(props.img);
  return (
    <div className="w-100 justify-content-center text-center">
      <img
        onMouseEnter={() => {
          setimgState(props.imgUrl2);
        }}
        onMouseLeave={() => {
          setimgState(props.img);
        }}
        src={imgState}
        className="w-100"
        alt=""
      />
      <div className="w-100 ">
        <h4 className="fs-6 pt-3  text-uppercase">{props.title}</h4>

        {/* <button className="border-0 bg-black text-white py-1 px-2 m-1 text-uppercase">shop now</button> */}
        {/* <p className="border p-0 m-0 ">Shop Now</p> */}
        {/* <Link to="#" className="card_link">Shop Now</Link> */}
      </div>
    </div>
  );
}

export default Card;
