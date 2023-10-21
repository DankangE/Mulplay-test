import React from "react";
import MyTable from "../../components/layout/mypage/MyTable";
import "./MyProceeds.css";
import paymentData from "../../data/paymentData.json";

const MyProceeds = () => {
  return (
    <div className="myProceeds">
      <MyTable data={paymentData} />
    </div>
  );
};

export default MyProceeds;
