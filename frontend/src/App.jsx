import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RoyalFamily from "./pages/RoyalFamily";
import RoyalFamilyDetails from "./pages/RoyalFamilyDetails";
import RoyalAssets from "./pages/RoyalAssets";

import "./_App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/RoyalFamily" element={<RoyalFamily />} />
        <Route path="/RoyalFamilyDetails" element={<RoyalFamilyDetails />} />
        <Route path="/RoyalAssets" element={<RoyalAssets />} />
      </Routes>
    </div>
  );
}

export default App;
