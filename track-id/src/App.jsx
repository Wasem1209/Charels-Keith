import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import TrackPage from "./pages/TrackPage";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="app">
      <header
        className="header-section"
        style={{
          backgroundImage: "url('/assets/header.jpg')",
        }}
      >
        <div className="header-overlay">
         
          <p>Global Delivery Made Simple</p>
        </div>
      </header>

      <section
        className="hero-section"
        style={{
          backgroundImage: "url('/assets/hero.jpg')",
        }}
      >
        <div className="hero-overlay">
          <h2>Shipment Tracking</h2>
          <p>Track your parcel anytime, anywhere</p>
          <button className="cta-btn" onClick={() => navigate("/track")}>
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/track" element={<TrackPage />} />
    </Routes>
  );
};

export default App;