import React from "react";
import home from "../assets/home.png";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching Soon</p>
          <p className="title">An NFT Collection Like No Other</p>
          <p className="description">Don't miss out on the release of our new NFT. Signup below to receive updates of when we go live</p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
