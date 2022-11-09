import React from "react";
import "../Pages/css/Footer.css";
import team from "../Pages/pic/logo.png";
import instagram from "../Pages/pic/Instagram.png";
import facebook from "../Pages/pic/Facebook.png";
import twitter from "../Pages/pic/Twitter.png";
import arrowblue from "../Pages/pic/arrowblue.png";

export const Footer = () => {
  return (
    <div class="parent2">
      <div className="footercolumns">
        <img src={team} alt="" style={{ width: 87, height: 60 }} />
        <a
          href="instagram.com"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
            textDecoration: "none",
          }}
        >
          <img src={instagram} alt="" style={{ width: 16, height: 16 }} />
          <p className="footerlink">Instagram</p>
        </a>
        <a
          href="facebook.com"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
            textDecoration: "none",
          }}
        >
          <img src={facebook} alt="" style={{ width: 16, height: 13 }} />
          <p className="footerlink">Facebook</p>
        </a>
        <a
          href="twitter.com"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
            textDecoration: "none",
            marginRight: 11,
          }}
        >
          <img src={twitter} alt="" style={{ width: 20, height: 16 }} />
          <p className="footerlink">Twitter</p>
        </a>
      </div>
      <div className="footercolumns" style={{ marginTop: 7 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <p className="footertitle">Use Cases</p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <p className="footerdesc">UI Design</p>
            <p className="footerdesc">UX Design</p>
            <p className="footerdesc">Prototyping</p>
          </div>
        </div>
      </div>
      <div className="footercolumns" style={{ marginTop: 7 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <p className="footertitle">Explore</p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <p className="footerdesc">Figma</p>
            <p className="footerdesc">Customers</p>
            <p className="footerdesc">Why I Love Figma</p>
          </div>
        </div>
      </div>
      <div className="footercolumns" style={{ marginTop: 7 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <p className="footertitle">Resources</p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <p className="footerdesc">Community Resources Hub</p>
            <p className="footerdesc">Resources</p>
            <p className="footerdesc">Prototyping</p>
          </div>
        </div>
      </div>
      <div className="footercolumns" style={{ marginTop: 7 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="footerinputtitle">Subscribe to our newsletter</p>
          <input placeholder="Email" className="footerinput">
            {/* <img src={arrowblue} alt="" /> */}
          </input>
        </div>
      </div>
    </div>
  );
};
