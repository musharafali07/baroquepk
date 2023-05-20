import React from "react";
import Left from "../components/Left";
import Right from "../components/Right";
import Layout from ".././components/Layout/Layout";

function CheckOut() {
  return (
    <Layout title={"Information - BAROQUE"}>
      <div className="d-flex m-0 p-0 pt-5 mt-5">
        <div className="m-0 w-75 ">
          <Left />
        </div>
        <div className="w-25 p-0">
          <Right />
        </div>
      </div>
    </Layout>
  );
}

export default CheckOut;

// import React from "react";

// const CheckOut = () => {
//   return <div>checkout</div>;
// };

// export default CheckOut;
