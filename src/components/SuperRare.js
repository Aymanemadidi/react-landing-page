import React from "react";
import Card from "./Card";
import paris from "../assets/pairs2.jpg";
import london from "../assets/london.png";
import egypt from "../assets/egypt.png";

export default function SuperRare() {
  const data = [
    {
      image: paris,
      series: "Destination",
      title: "Paris, FR",
      price: 500,
      tag: 12983,
      time: 1,
    },
    {
      image: egypt,
      series: "Destination",
      title: "Giza, EG",
      price: 350,
      tag: 12983,
      time: 1,
    },
    {
      image: london,
      series: "Destination",
      title: "London, UK",
      price: 500,
      tag: 12983,
      time: 1,
    },
    {
      image: egypt,
      series: "Destination",
      title: "Giza, EG",
      price: 350,
      tag: 12983,
      time: 1,
    },
  ];

  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">Trip Options</h2>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          eveniet.
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            title={title}
            series={series}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
