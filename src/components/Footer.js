import React from "react";
import logo2 from "../assets/travely-logo-white.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
  const links = [
    {
      title: "About",
      data: ["About", "Terms", "Legal"],
    },
    // {
    //   title: "NFT",
    //   data: ["OpenSea", "Maker", "Learn"],
    // },
    {
      title: "Contact",
      data: ["Press", "Support"],
    },
    {
      title: "Social",
      data: ["Twiiter", "Instagram"],
    },
  ];
  const socialLink = [
    <BsFacebook />,
    <BsTwitter />,
    <BsInstagram />,
    <FaTiktok />,
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo2} alt="logo" />
          </div>
          <p>Exclusive Travels</p>
          <ul>
            {socialLink.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, i) => {
            return (
              <div className="link" key={i}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, i2) => (
                    <li key={i2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright 2022</span>
        <span>Launching August 2022</span>
      </div>
    </footer>
  );
}
