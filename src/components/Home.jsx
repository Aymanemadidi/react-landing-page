import React from "react";
// import home from "../assets/home.png";
import travelMain from '../assets/travel-main.png';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching Soon</p>
          <p className="title">Lorem ipsum dolor sit amet consectetur.</p>
          <p className="description">Don't miss out on the release of our new Travel Agency. Signup below to receive updates of whennew deals are posted</p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={travelMain} alt="home" />
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
