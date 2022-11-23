import React from "react";

const styles = {
  div: {
    display: "flex",
    gap: 20,
    marginRight: 450,
  },
  div2: {
    display: "flex",
    flexDirection: "column",
  },
  thing: {
    width: 70,
    height: 21,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 21,
    display: "flex",
    alignItems: "center",
    color: "#1E2742",
    margin: 0,
  },
  name: {
    width: "auto",
    height: 30,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 30,
    display: "flex",
    alignItems: "center",
    color: "#25313C",
    margin: 0,
  },
  work: {
    width: 100,
    height: 21,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 21,
    display: "flex",
    alignItems: "center",
    color: "#989898",
    margin: 0,
  },
};

export const Profile2 = (props) => {
  return (
    <div style={styles.div}>
      <img
        alt=""
        src={props.pic}
        style={{ width: 56, height: 56, borderRadius: "50%" }}
      />
      <div style={styles.div2}>
        <p style={styles.thing}>Written by</p>
        <p style={styles.name}>{props.name}</p>
        <p style={styles.work}>{props.work}</p>
      </div>
    </div>
  );
};
