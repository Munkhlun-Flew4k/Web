import { React, useEffect } from "react";
import { Header2 } from "../Components/Header2";
import { Card2 } from "../Components/Card2";
import { Footer } from "../Components/Footer";
import "../Pages/css/Services.css";
import { useState } from "react";
import axios from "axios";

const URL = "https://dummyapi.io/data/v1/tag/water/post?limit=9";
const access_token = "63749ecbccf63dbe793509f9";

export const Services = () => {
  const [dataAPI, setDataAPI] = useState();

  useEffect(() => {
    axios
      .get(URL, {
        headers: {
          "APP-ID": access_token,
        },
      })
      .then(function (response) {
        // handle success
        setDataAPI(response.data.data);
        console.log(dataAPI);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
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
      </div>

      <div className="servicesdiv">
        {dataAPI &&
          dataAPI.map((el) => {
            return <Card2 data={el} />;
          })}
      </div>
      <button className="servicesbutton">Next-> </button>
      <Footer />
    </div>
  );
};
