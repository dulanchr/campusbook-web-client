import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "../Pages/Landingpage";
import HomePage from "../Pages/Homepage";
import Step01 from "../Pages/Step01";

const Navigation = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/step01" element={<Step01 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navigation;
