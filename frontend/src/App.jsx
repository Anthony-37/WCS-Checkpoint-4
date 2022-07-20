import React from "react";
import { Routes, Route } from "react-router-dom";
import RoyalFamily from "./pages/RoyalFamily";
import Home from "./pages/Home";

import "./_App.scss";

function App() {
  return (
    <div className="App">
      <div className="full-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/RoyalFamily" element={<RoyalFamily />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
