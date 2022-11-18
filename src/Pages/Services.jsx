import { React, useEffect } from "react";
import { Header2 } from "../Components/Header2";
import { Card2 } from "../Components/Card2";
import { Footer } from "../Components/Footer";
import "../Pages/css/Services.css";
import { useState } from "react";
import axios from "axios";
import Lottie from "react-lottie";
import * as animationData from "./99109-loading.json";

const URL = "https://dummyapi.io/data/v1/tag/water/post?limit=9";
const access_token = "63749ecbccf63dbe793509f9";

export const Services = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [dataAPI, setDataAPI] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get(URL, {
          headers: {
            "APP-ID": access_token,
          },
        })
        .then(function (response) {
          setDataAPI(response.data.data);
          console.log(dataAPI);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Services">
      <Header2 />
      <div style={{ width: 100, height: 100 }}></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          width: "66vw",
        }}
      >
        <p className="title">Blog Posts</p>
        <p className="desc">
          Our latest updates and blogs about managing your team
        </p>
        <Lottie
          options={defaultOptions}
          style={{ marginTop: 100, display: dataAPI ? "none" : "flex" }}
          height={150}
          width={150}
        ></Lottie>
      </div>

      <div className="servicesdiv">
        {dataAPI &&
          dataAPI.map((el) => {
            return <Card2 data={el} />;
          })}
      </div>
      <button className="servicesbutton">Next {">"} </button>
      <Footer />
    </div>
  );
};
