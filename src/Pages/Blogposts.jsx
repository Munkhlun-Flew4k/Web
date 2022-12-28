import { React, useEffect } from "react";
import { Card2 } from "../Components/Card2";
import { Footer } from "../Components/Footer";
import "../Pages/css/Blogposts.css";
import { useState } from "react";
import axios from "axios";
import Lottie from "react-lottie";
import * as animationData from "./99109-loading.json";

const URL = "http://localhost:8000/users";

export const Blogposts = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [dataAPI, setDataAPI] = useState();

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(URL);
      axios
        .get(URL, config)
        .then(function (response) {
          setDataAPI(response.users);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Blogposts">
      <div style={{ width: 100, height: 50 }}></div>
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
        />
      </div>

      <div className="Blogpostsdiv">
        {dataAPI &&
          dataAPI.map((el) => {
            return <Card2 data={el} />;
          })}
      </div>
      <button className="Blogpostsbutton">Next {">"} </button>
      <Footer />
    </div>
  );
};
