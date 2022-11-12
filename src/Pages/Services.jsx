import React from "react";
import { Header2 } from "../Components/Header2";
import { Card2 } from "../Components/Card2";
import { Footer } from "../Components/Footer";
import "../Pages/css/Services.css";
export const Services = () => {
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
        <Card2
          title="10 secret tips for managing a team remotely"
          desc="Our latest updates and blogs about managing your team"
        />
        <Card2
          title="10 secret tips for managing a team remotely"
          desc="Our latest updates and blogs about managing your team"
        />
        <Card2
          title="10 secret tips for managing a team remotely"
          desc="Our latest updates and blogs about managing your team"
        />
      </div>
      <div className="servicesdiv">
        <Card2
          title="10 secret tips for managing a team remotely"
          desc="Our latest updates and blogs about managing your team"
        />
        <Card2
          title="10 secret tips for managing a team remotely"
          desc="Our latest updates and blogs about managing your team"
        />
        <Card2
          title="10 secret tips for managing a team remotely"
          desc="Our latest updates and blogs about managing your team"
        />
      </div>
      <div className="servicesdiv">
        <Card2
          title="10 secret tips for managing a team remotely"
          desc="Our latest updates and blogs about managing your team"
        />
        <Card2
          title="10 secret tips for managing a team remotely"
          desc="Our latest updates and blogs about managing your team"
        />
        <Card2
          title="10 secret tips for managing a team remotely"
          desc="Our latest updates and blogs about managing your team"
        />
      </div>
      <Footer />
    </div>
  );
};
