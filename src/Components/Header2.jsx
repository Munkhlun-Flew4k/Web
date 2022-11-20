import React from "react";
import logoblack from "../Pages/pic/logoblack.png";
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
    background: "white",
    width: "100vw",
    zIndex: 50,
    height: 100,
    left: 0,
    top: 0,
  },
  button: {
    width: 128,
    height: 56,
    border: "2px solid rgba(77, 160, 253, 0.42)",
    borderRadius: "4px",
    background: "rgba(77, 160, 253, 0.1)",
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#4DA0FD",
    textDecoration: "none",
  },
};

export const Header2 = () => {
  let location = useLocation();
  let pathname = location.pathname;
  return (
    <div style={styles.navbar}>
      <Link to="/" id="/" style={styles.navbartabs}>
        <img src={logoblack} style={styles.logo} alt="" />
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
          className={
            pathname === "/Products" ? "navbartabstapped" : "navbartabs"
          }
        >
          Products
        </Link>
        <Link
          to="/Services"
          id="/Services"
          className={
            pathname === "/Services" ? "navbartabstapped" : "navbartabs"
          }
        >
          Services
        </Link>
        <Link
          to="/Contact"
          id="/Contact"
          className={
            pathname === "/Contact" ? "navbartabstapped" : "navbartabs"
          }
        >
          Contact
        </Link>
        <Link
          to="/Login"
          id="/Login"
          className={pathname === "/Login" ? "navbartabstapped" : "navbartabs"}
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
