import React from "react";
import "./TrackPage.css"; 

const TrackPage = () => {
  return (
    <div className="track-page">
      <h2>Enter Your Tracking Number</h2>
      <form className="track-form">
        <input
          type="text"
          placeholder="Tracking ID"
          required
          className="track-input"
        />
        <button type="submit" className="cta-btn">
          Track
        </button>
      </form>
    </div>
  );
};

export default TrackPage;