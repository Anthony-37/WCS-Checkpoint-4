import React from "react";
import Header from "../components/Header";
import "../styles/_Home.scss";

export default function Home() {
  return (
    <section id="home">
      <Header />
      <div className="container">
        <h1>Welcome to the Kingdom of Colchis</h1>
        <div className="about-container">
          <h2>About the Kingdom</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
            dolores illum perspiciatis eum eveniet hic enim omnis dicta autem
            assumenda illo, maxime animi accusantium! Perspiciatis voluptatibus
            fugit iusto, alias iste sapiente rerum enim autem ut id ipsum
            assumenda dolore deleniti dolorum. Consequatur, magnam fugiat quas
            reiciendis harum repudiandae ipsam illum ipsa sed voluptatum?
            Doloremque dicta aliquid illum aut eligendi incidunt voluptate ipsum
            eveniet voluptatem, praesentium accusantium distinctio culpa quos
            minima.
          </p>
        </div>
      </div>
    </section>
  );
}
