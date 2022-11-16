import React from "react";
import { Profile } from "../Components/Profile";

const styles = {
  div: {
    width: 363,
    height: 400,
    background: "#F5F5F5",
    borderRadius: 50,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 25,
  },
  title: {
    width: 330,
    height: 58,
    fontStyle: "normal",
    fontWeight: 500,
    textAlign: "start",
    fontSize: 24,
    display: "flex",
    alignItems: "center",
    color: "#25313C",
    margin: 0,
    justifyContent: "center",
  },
  desc: {
    width: 318,
    height: 42,
    fontStyle: "normal",
    fontWeight: 600,
    textAlign: "start",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    color: "#25313C",
    margin: 0,
  },
};

export const Card2 = ({ data }) => {
  return (
    <div style={styles.div}>
      <img
        alt=""
        src={data.image}
        style={{
          width: 363,
          height: 150,
          objectFit: "cover",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}
      />
      <p style={styles.title}>{data.owner.firstName}</p>
      <p style={styles.desc}>{data.text}</p>
      <Profile
        pic={data.owner.picture}
        name={data.owner.firstName + " " + data.owner.lastName}
        date={data.publishDate.slice(0, 10)}
      />
    </div>
  );
};
