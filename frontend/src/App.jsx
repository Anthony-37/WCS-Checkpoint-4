import React from "react";
import { Routes, Route } from "react-router-dom";
import { CurrentUserContextProvider } from "./contexts/userContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RoyalFamily from "./pages/RoyalFamily";
import RoyalFamilyDetails from "./pages/RoyalFamilyDetails";
import RoyalAssets from "./pages/RoyalAssets";
import ContactUs from "./pages/ContactUs";

import "./_App.scss";

function App() {
  return (
    <CurrentUserContextProvider>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/royalFamily" element={<RoyalFamily />} />
          <Route path="/royalFamilyDetails" element={<RoyalFamilyDetails />} />
          <Route path="/royalAssets" element={<RoyalAssets />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </div>
    </CurrentUserContextProvider>
  );
}

export default App;
