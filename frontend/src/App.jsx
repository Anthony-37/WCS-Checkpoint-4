import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./_App.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
