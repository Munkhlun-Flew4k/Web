import React from "react";
import { Header } from "../Components/Header";

const styles = {
  bigdiv: {
    background: "black",
    width: "100vw",
    height: "100vh",
    margin: -8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
export const Services = () => {
  return (
    <div style={styles.bigdiv}>
      <Header />
    </div>
  );
};
