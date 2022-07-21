import React from "react";
import { Routes, Route } from "react-router-dom";
import RoyalFamily from "./pages/RoyalFamily";
import Home from "./pages/Home";

import "./_App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/RoyalFamily" element={<RoyalFamily />} />
      </Routes>
    </div>
  );
}

export default App;
