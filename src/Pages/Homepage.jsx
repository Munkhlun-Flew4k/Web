import React from "react";
import "./css/Homepage.css";
import pic1 from "./pic/page1pic1.png";
import somegirl from "./pic/somegirl.png";
import somegirl2 from "./pic/somegirl2.png";
import notification from "./pic/notification.png";
import calendar from "./pic/calendar.png";
import { Notification } from "../Components/Notification";
import calendar2 from "./pic/calendar2.png";

export const Homepage = () => {
  return (
    <div className="parent">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <p className="hometitle">Your Hub for teamwork</p>
          <p className="homedesc">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <a className="link" href="google.com">
            Learn more
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          marginTop: 70,
        }}
      >
        <Notification />
        <img src={pic1} className="pic1" alt="" />
        <img src={notification} alt="" className="notificationicon" />
        <img src={calendar} alt="" className="calendaricon" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Notification />
        <img
          src={somegirl}
          alt=""
          style={{
            width: 562,
            height: 567,
            borderRadius: 25,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <p className="hometitle">Simple task management</p>
          <p className="homedesc">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <a className="link" href="google.com">
            Learn more
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <p className="hometitle">Scheduling that actually works</p>
          <p className="homedesc">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <a className="link" href="google.com">
            Learn more
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img src={calendar2} className="calendericon2" alt="" />
        <img src={somegirl2} className="pic2" alt="" />
      </div>
    </div>
  );
};
