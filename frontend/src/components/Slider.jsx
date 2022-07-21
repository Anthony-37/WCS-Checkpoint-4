/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/_Slider.scss";

export default function SliderMovies() {
  const [RoyalFamilyCard, setRoyalFamilyCard] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/ProfilRoyalFamily`)
      .then((res) => setRoyalFamilyCard(res.data));
  });

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          slidesToShow: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {RoyalFamilyCard.map((person) => (
        <NavLink className="person-link" to="/Home">
          <div key={person.id} className="slider-box">
            <div className="slider-img">
              <img
                src={`http://localhost:5000${person.picture}`}
                alt={person.firstname}
              />
            </div>
            <div className="title-box">
              <h2>{person.status}</h2>
              <h3>{`${person.firstname} ${person.lastname}`}</h3>
            </div>
          </div>
        </NavLink>
      ))}
    </Slider>
  );
}
