import React from "react";
import "../Pages/css/Review.css";
import { Card1 } from "./Card1";
import arrowblue from "../Pages/pic/arrowblue.png";
import arrowgrey from "../Pages/pic/arrowgrey.png";

export const Review = () => {
  return (
    <div className="Review">
      <p className="Reviewtitle">What people say about us</p>
      <div className="somediv2">
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
      <div
        style={{ display: "flex", gap: 20, marginBottom: 43, marginLeft: 820 }}
      >
        <div className="somediv3">
          <img alt="" src={arrowgrey} className="arrows" />
        </div>

        <div className="somediv3">
          <img alt="" src={arrowblue} className="arrows" />
        </div>
      </div>
    </div>
  );
};
