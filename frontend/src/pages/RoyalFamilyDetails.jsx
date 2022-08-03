import React, { useEffect, useState } from "react";
import { useSearchParams, NavLink } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Btnreturn from "../assets/svg/svg-path/Btnreturn";
import "../styles/_RoyalFamilyDetails.scss";

export default function RoyalFamilyDetails() {
  const [royalFamilyDetails, setRoyalFamilyDetails] = useState([]);
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("id");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/ProfilRoyalFamily/${userId}`)
      .then((res) => setRoyalFamilyDetails(res.data));
  }, []);
  return (
    <section id="royal-family-details">
      <Header />
      <div className="container">
        <div className="details-box-mobil">
          <NavLink className="btn-return" to="/RoyalFamily">
            <Btnreturn />
          </NavLink>
          <img
            src={`http://localhost:5000${royalFamilyDetails.avatar}`}
            alt={royalFamilyDetails.firstname}
          />
          <div className="details-title">
            <h1>{royalFamilyDetails.status}</h1>
            <h2>{`${royalFamilyDetails.firstname} ${royalFamilyDetails.lastname}`}</h2>
          </div>
          <p>{royalFamilyDetails.description}</p>
        </div>

        <div className="details-box-desktop">
          <NavLink className="btn-return" to="/RoyalFamily">
            <Btnreturn />
          </NavLink>
          <div className="left-box">
            <img
              src={`http://localhost:5000${royalFamilyDetails.picture}`}
              alt={royalFamilyDetails.firstname}
            />
          </div>
          <div className="right-box">
            <div className="details-title">
              <h1>{royalFamilyDetails.status}</h1>
              <h2>{`${royalFamilyDetails.firstname} ${royalFamilyDetails.lastname}`}</h2>
            </div>
            <p>{royalFamilyDetails.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
