import React from "react";
import profilepic2 from "../Pages/pic/profilepic2.png";

const styles = {
  name: {
    width: "auto",
    height: 18,
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 10,
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
    fontSize: 10,
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
  desc: {
    width: 120,
    height: 18,
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 17,
    display: "flex",
    alignItems: "center",
    color: "black",
  },
};
export const Profile3 = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          width: "auto",
          height: "auto",
        }}
      >
        <img alt="" src={profilepic2} style={{ width: 40, height: 40 }} />
        <p style={styles.name}>{props.name}</p>
        <div style={styles.div}></div>
        <p style={styles.date}>{props.date}</p>
      </div>
      <p style={styles.desc}></p>
    </div>
  );
};
