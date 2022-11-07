import React from "react";
import invitation from "../Pages/pic/invitation.png";
import am from "../Pages/pic/am.png";
import es from "../Pages/pic/es.png";
import "../Pages/css/Notification.css";
import pin from "../Pages/pic/pin.png";

export const Notification = () => {
  return (
    <div className="somediv">
      <p className="time">11:00 AM - 11:30 AM</p>
      <p className="title2">Website for the Product</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 10, marginLeft: 10 }}>
          <img alt="" src={invitation} style={{ width: 25, height: 25 }} />
          <img alt="" src={am} style={{ width: 25, height: 25 }} />
          <img alt="" src={es} style={{ width: 25, height: 25 }} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            marginRight: 10,
          }}
        >
          <img alt="" src={pin} style={{ width: 5, height: 10 }} />
          <p style={{ margin: 0 }}>10 attachements</p>
        </div>
      </div>
    </div>
  );
};
