import React from "react";
import icon from "../assets/icon.png";
// import super1 from "../assets/super1.png";
import london from "../assets/london.png";
import egypt from "../assets/egypt.png";
import Card from "./Card";

const Free = () => {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">Free travel tickets for loyal customers</h2>
          <p className="description">
            Sign up today and you'll have the chance to win free tickets
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={london}
            title="London, UK"
            series="Destination"
            price={0}
            tag={12983}
            time={6}
          />
        </div>
        <div className="card2">
          <Card
            image={egypt}
            title="Giza, EG"
            series="Destination"
            price={0}
            tag={12983}
            time={7}
          />
        </div>
      </div>
    </div>
  );
};

export default Free;
