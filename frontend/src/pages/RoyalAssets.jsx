import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import "../styles/_RoyalAssets.scss";

function calc(n, v) {
  return n * v;
}

export default function RoyalFamily() {
  const [royalFamilyAsset, setRoyalFamilyAsset] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/asset`)
      .then((res) => setRoyalFamilyAsset(res.data));
  }, []);

  return (
    <section id="royal-assets">
      <Header />
      <div className="container">
        <h1>Royal Assets</h1>
        <div className="container-assets-box">
          {royalFamilyAsset.map((asset) => (
            <div className="asset-box">
              <div className="asset-box-title">{asset.name}</div>
              <div className="asset-box-content">
                <p>Number : {asset.quantity}</p>
                <p>Unit Value : {asset.price}</p>
                <p>
                  <span>Total value : </span>
                  {calc(parseInt(`${asset.price}`, 10), `${asset.quantity}`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
