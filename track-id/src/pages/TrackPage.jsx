import React, { useState } from "react";
import "./TrackPage.css";
import { useNavigate } from "react-router-dom";

const TrackPage = () => {

    const [trackingId, setTrackingId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (trackingId.trim()) {
            navigate(`/track/${trackingId}`);
        }
    };
    // const getName = () => {
    //     fetch("http://localhost:3000/name", {
    //         method: "GET",
    //         headers: { "content-Type": "Application/json" }
    //     }).then(response => response.json()).then((res) => {
    //         console.log(res)
    //     })
    // }

    return (
        <div className="track-page">
            <h2>Enter Your Tracking Number</h2>
            <form onSubmit={handleSubmit} className="track-form">
                <input
                    type="text"
                    placeholder="Enter Tracking ID"
                    className="track-input"
                    value={trackingId}
                    onChange={(e) =>setTrackingId(e.target.value)}
                    required
                />
                <button type="submit" className="cta-btn">
                    Track
                </button>
            </form>

            {/* <button onClick={() => { getName() }}className="cta-btn">
                    Track
                </button> */}
        </div>
    );
};

export default TrackPage;