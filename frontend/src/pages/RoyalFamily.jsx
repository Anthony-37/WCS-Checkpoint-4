import React from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";
import "../styles/_RoyalFamily.scss";

export default function RoyalFamily() {
  return (
    <section id="royal-family">
      <Header />
      <div className="container">
        <h1>Royal Family</h1>
        <Slider />
      </div>
    </section>
  );
}
