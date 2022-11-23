import { React, useEffect } from "react";
import { Card2 } from "../Components/Card2";
import { Footer } from "../Components/Footer";
import "../Pages/css/Blogposts.css";
import { useState } from "react";
import axios from "axios";
import Lottie from "react-lottie";
import * as animationData from "./99109-loading.json";

const URL = "https://dummyapi.io/data/v1/tag/water/post?limit=9";
const access_token = "63749ecbccf63dbe793509f9";

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
