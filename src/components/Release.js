import React from "react";
import { BsArrowRight } from "react-icons/bs";
import london from "../assets/london.png";
import egypt from "../assets/egypt.png";

const Release = () => {
  return (
    <div className="releases">
      <div className="release blue">
        <div className="content">
          <h2 className="title">Lorem ipsum dolor sit amet.</h2>
          <p className="description">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            consequuntur. <a href="#"> lorem</a>.
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            voluptas alias blanditiis consequuntur?
          </p>
          <p className="description">50% of proceeds go to charity</p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
        <div className="image">
          <img src={egypt} alt="release1" />
          <div className="ellipse pink"></div>
        </div>
      </div>

      <div className="release green">
        <div className="card-container">
          <div className="image">
            <img src={london} alt="release1" />
          </div>
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Lorem ipsum dolor sit amet.</h2>
          <p className="description">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, amet!{" "}
            <a href="#"> lorem</a>.
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            repellat quod nisi veniam.
          </p>
          <p className="description">50% of proceeds go to charity</p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Release;
