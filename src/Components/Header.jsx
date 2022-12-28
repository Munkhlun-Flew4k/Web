import { React } from "react";
import logo from "../Pages/pic/logo.png";
import logoblack from "../Pages/pic/logoblack.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../Pages/css/switcher.css";

export const Header = () => {
  let location = useLocation();
  let pathname = location.pathname;
  console.log(pathname);
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
      background: pathname === "/" ? "black" : "#FFFFFF",
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
      color: pathname === "/" ? "#FFFFFF" : "black",
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
      color: pathname === "/" ? "#FFFFFF" : "black",
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
    buttonblue: {
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
  return (
    <div style={styles.navbar}>
      <Link to="/" id="/" style={styles.navbartabs}>
        <img
          src={pathname === "/" ? logo : logoblack}
          style={styles.logo}
          alt=""
        />
      </Link>
      <div style={{ display: "flex", gap: 60 }}>
        {/* <Link
          to="/Products"
          id="/Products"
          style={
            pathname === "/Products"
              ? styles.navbartabstapped
              : styles.navbartabs
          }
        >
          Products
        </Link> */}
        <Link
          to="/Blogposts"
          id="/Blogposts"
          style={
            pathname === "/Blogposts"
              ? styles.navbartabstapped
              : styles.navbartabs
          }
        >
          Blogposts
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
        <Link
          to="/Getaccess"
          id="/Getaccess"
          style={pathname === "/" ? styles.button : styles.buttonblue}
        >
          Get Access
        </Link>
      </div>
    </div>
  );
};
