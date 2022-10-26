import React from "react";
import logo from "../Pages/pic/logo.png";
import { Link } from "react-router-dom";

const styles = {
  logo: {
    width: 110,
    height: 75,
  },
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navbartabs: {
    marginTop: 39,
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "25px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    textDecoration: "none",
  },
  button: {
    width: 128,
    height: 56,
    marginTop: 42,
    border: "2px solid #FFFFFF",
    borderRadius: "4px",
    background: "transparent",
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
  },
};

export const Header = () => {
  return (
    <div style={styles.navbar}>
      <img src={logo} style={styles.logo} alt="" />
      <div style={{ display: "flex", gap: 60 }}>
        <Link to="/Products" style={styles.navbartabs}>
          Products
        </Link>
        <Link to="/Services" style={styles.navbartabs}>
          Services
        </Link>
        <Link to="/Contact" style={styles.navbartabs}>
          Contact
        </Link>
        <Link to="/Login" style={styles.navbartabs}>
          Log in
        </Link>
        <button style={styles.button}>Get access</button>
      </div>
    </div>
  );
};
