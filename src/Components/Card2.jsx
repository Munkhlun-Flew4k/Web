import pic2 from "../pic2.png";

import hehe from "../Hehe.png";

import React from "react";

const styles = {
  img3: {
    width: 360,
    height: 147,
    paddingRight: 10,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 50,
  },
  card2title: {
    width: 330.01,
    height: 58,
    fontFamily: "Cabin",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 24,
    display: "flex",
    alignItems: "center",
    color: "#25313C",
    margin: 0,
  },
  card2desc: {
    width: 318.33,
    height: 50,
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    display: "flex",
    alignItems: "flex-end",
    color: "#25313C",
    margin: 0,
  },
  img2: {
    width: 44.51,
    height: 45,
  },
  card2name: {
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
  card2date: {
    width: 134,
    height: 18,
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    color: "#6D7D8B",
  },
  something: {
    width: 4,
    height: 22,
    borderRadius: 5,
    background: "#BBC8D4",
  },
  smalldiv2: {
    width: 363,
    height: "auto",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  card2: {
    width: 360,
    height: 420,
    display: "flex",
    flexDirection: "column",
    gap: 30,
    justifyContent: "center",
    alignItems: "space-between",
    background: "rgb(255 255 255)",
  },
};

export const Card2 = () => {
  return (
    <div style={styles.card2}>
      <img src={hehe} alt="" />
      <div style={{ padding: 20 }}>
        <p style={styles.card2title}>
          Data-Driven Design is Killing Our Instincts
        </p>
        <p style={styles.card2desc}>
          Our latest updates and blogs about managing your team Our latest
          updates and blogs about managing your team
        </p>
        <div style={styles.smalldiv2}>
          <img style={styles.img2} src={pic2} alt="" />
          <p style={styles.card2name}>Jane Cooper</p>
          <div style={styles.something}></div>
          <p style={styles.card2date}>24 Of October,2022</p>
        </div>
      </div>
    </div>
  );
};
