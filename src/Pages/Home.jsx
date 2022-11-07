import React from "react";
import backgroundpic from "./pic/backgroundpic.jpg";
import { Header } from "../Components/Header";
import { Homepage } from "./Homepage";
import { Review } from "../Components/Review";

const styles = {
  bigdiv: {
    backgroundImage: `url(${backgroundpic})`,
    width: "100vw",
    height: "100vh",
    backgroundSize: "100% 100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: 514,
    height: 326,
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
  huree: {
    width: "85%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: 120,
  },
  title: {
    width: 514,
    height: 120,
    fontFamily: "Work Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "50px",
    display: "flex",
    color: "#FFFFFF",
  },
  desc: {
    width: 324,
    height: 58,
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
  },
  input: {
    width: 317,
    height: 56,
    background: "#FFFFFF",
    border: "2px solid #BBC8D4",
    borderRadius: 10,
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#6D7D8B",
  },
  button: {
    width: 163,
    height: 56,
    background: "#0BBEF2",
    border: 0,
    borderRadius: 10,
    marginTop: 3,
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
  },
};

export const Home = () => {
  return (
    <div style={{ margin: -8 }}>
      <div style={styles.bigdiv}>
        <div style={styles.huree}>
          <Header />
          <div style={styles.middle}>
            <p style={styles.title}>Instant collaborations for remote teams</p>
            <p style={styles.desc}>
              All in one for your remote team chats, collaboration and track
              projects
            </p>
            <div style={{ display: "flex", gap: 30 }}>
              <input placeholder="Email" style={styles.input} />
              <button style={styles.button}>Get early access</button>
            </div>
          </div>
        </div>
      </div>
      <Homepage />
      <Review />
    </div>
  );
};
