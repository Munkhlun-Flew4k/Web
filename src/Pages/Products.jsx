import React from "react";
import { Header } from "../Components/Header";

const styles = {
  bigdiv: {
    // backgroundImage: `url(${backgroundpic})`,
    background: "black",
    width: "100vw",
    height: "100vh",
    // backgroundSize: "100% 100%",
    margin: -8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  huree: {
    width: "85%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 120,
  },
};
export const Products = () => {
  return (
    <div style={styles.bigdiv}>
      <div style={styles.huree}>
        <Header />
      </div>
    </div>
  );
};
