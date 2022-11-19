import React from "react";
import logo from "../Pages/pic/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../Pages/css/switcher.css";

const styles = {
  logo: {
    width: 110,
    height: 75,
    marginBottom: 10,
  },
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 920,
    position: "fixed",
    background: "black",
    width: "100vw",
    zIndex: 50,
    height: 100,
    left: 0,
    top: 0,
  },
  navbartabs: {
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
  navbartabstapped: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "25px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    textDecoration: "underline",
  },
  button: {
    width: 128,
    height: 56,
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
    textDecoration: "none",
  },
};

export const Header = () => {
  let location = useLocation();
  let pathname = location.pathname;
  console.log(pathname);
  return (
    <div style={styles.navbar}>
      <Link to="/" id="/" style={styles.navbartabs}>
        <img src={logo} style={styles.logo} alt="" />
      </Link>
      <div style={{ display: "flex", gap: 60 }}>
        <div className="wrapper">
          <input type="checkbox" id="hide-checkbox" />
          <label for="hide-checkbox" className="toggle">
            <span className="toggle-button">
              <span className="crater crater-1"></span>
              <span className="crater crater-2"></span>
              <span className="crater crater-3"></span>
              <span className="crater crater-4"></span>
              <span className="crater crater-5"></span>
              <span className="crater crater-6"></span>
              <span className="crater crater-7"></span>
            </span>
            <span className="star star-1"></span>
            <span className="star star-2"></span>
            <span className="star star-3"></span>
            <span className="star star-4"></span>
            <span className="star star-5"></span>
            <span className="star star-6"></span>
            <span className="star star-7"></span>
            <span className="star star-8"></span>
          </label>
        </div>
        <Link
          to="/Products"
          id="/Products"
          style={
            pathname === "/Products"
              ? styles.navbartabstapped
              : styles.navbartabs
          }
        >
          Products
        </Link>
        <Link
          to="/Services"
          id="/Services"
          style={
            pathname === "/Services"
              ? styles.navbartabstapped
              : styles.navbartabs
          }
        >
          Services
        </Link>
        <Link
          to="/Contact"
          id="/Contact"
          style={
            pathname === "/Contact"
              ? styles.navbartabstapped
              : styles.navbartabs
          }
        >
          Contact
        </Link>
        <Link
          to="/Login"
          id="/Login"
          style={
            pathname === "/Login" ? styles.navbartabstapped : styles.navbartabs
          }
        >
          Log in
        </Link>
        <Link to="/Getaccess" id="/Getaccess" style={styles.button}>
          Get Access
        </Link>
      </div>
    </div>
  );
};
