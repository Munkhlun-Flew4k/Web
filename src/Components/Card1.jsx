import pic1 from "../Pages/pic/pic1.png";

import React from "react";

import { Stars } from "./Star";

const styles = {
  stardiv: {
    display: "flex",
    gap: 10,
  },
  stars: {
    width: 17.11,
    height: 16.36,
  },
  card1desc: {
    width: 291,
    height: 154,
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 18,
    lineHeight: "29px",
    color: "#000000",
    display: "flex",
    alignItems: "center",
  },
  smalldiv1: {
    display: "flex",
    gap: 30,
    marginRight: 100,
  },
  img1: {
    width: 56,
    height: 56,
  },
  card1name: {
    width: 105,
    height: 29,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 18,
    color: "#000000",
    display: "flex",
    alignItems: "center",
  },
  card1: {
    width: 366,
    height: 374,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "rgb(255 255 255)",
    filter: "drop-shadow(0px 15px 35px rgba(0, 0, 0, 0.25))",
    borderRadius: 15,
    gap: 10,
  },
};

export const Card1 = () => {
  return (
    <div style={styles.card1}>
      <Stars />
      <p style={styles.card1desc}>
        Give everyone you work with—inside and outside your emoji, keep
        conversations focused in channels, and simplify all your communication
        into one place.
      </p>
      <div style={styles.smalldiv1}>
        <img style={styles.img1} src={pic1} alt="" />
        <p style={styles.card1name}>Amy Klassen</p>
      </div>
    </div>
  );
};
