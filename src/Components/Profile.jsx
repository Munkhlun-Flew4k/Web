import React from "react";
import profilepic1 from "../Pages/pic/products/profilepic1.png";

const styles = {
  name: {
    width: "auto",
    height: 18,
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    color: "#6D7D8B",
    margin: 0,
  },
  date: {
    width: 120,
    height: 18,
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    color: "#6D7D8B",
  },
  div: {
    width: 4,
    height: 21,
    background: "#BBC8D4",
    borderRadius: 5,
  },
};
export const Profile = (props) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 30,
        justifyContent: "center",
        alignItems: "center",
        width: "auto",
        height: "auto",
      }}
    >
      <img alt="" src={profilepic1} style={{ width: 56, height: 56 }} />
      <p style={styles.name}>{props.name}</p>
      <div style={styles.div}></div>
      <p style={styles.date}>{props.date}</p>
    </div>
  );
};
