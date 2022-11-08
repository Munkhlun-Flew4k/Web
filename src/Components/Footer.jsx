import React from "react";
import "../Pages/css/Footer.css";
import team from "../Pages/pic/logo.png";
import instagram from "../Pages/pic/Instagram.png";
import facebook from "../Pages/pic/Facebook.png";
import twitter from "../Pages/pic/Twitter.png";

export const Footer = () => {
  return (
    <div class="parent2">
      <div className="footercolumns">
        <img src={team} alt="" style={{ width: 87, height: 60 }} />
        <a //instagram
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
        <a //facebook
          href="instagram.com"
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
        <a //twitter
          href="instagram.com"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
            textDecoration: "none",
          }}
        >
          <img src={twitter} alt="" style={{ width: 20, height: 16 }} />
          <p className="footerlink">Twitter</p>
        </a>
      </div>
      <div className="footercolumns">2</div>
      <div className="footercolumns">3</div>
      <div className="footercolumns">4</div>
      <div className="footercolumns">5</div>
    </div>
  );
};
