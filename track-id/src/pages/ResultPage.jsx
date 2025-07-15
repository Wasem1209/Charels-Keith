// src/pages/ResultsPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ResultPage.css";

function ResultsPage() {
  const { id } = useParams(); // From URL
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetch(`https://ck-backend-8vtk.onrender.com//api/track/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.message) {
          setShipment(data);
        } else {
          setShipment(null);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching shipment:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading shipment info...</p>;
  if (!shipment) return <p>🚫 No shipment found for ID: {id}</p>;

  return (
    <div className="results-page">
      <h2>Tracking Info for: <strong>{id}</strong></h2>

      {/* Progress Bar */}
      <section className="progress-container">
        <h3>Shipment Progress</h3>
        <div className="progress-bar">
          {["Order Placed", "Processed", "Shipped", "In Transit", "Delivered"].map((step, index) => (
            <div key={index} className='{progress-step ${shipment.progress >= index ? "active" : ""}}'>
              <div className="circle">{index + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shipper & Receiver Details */}
      <section className="shipment-profile">
        <h3>Shipment Profile</h3>
        <div className="profile-columns">
          <div className="column">
            <h4>Shipper</h4>
            <p><strong>Name:</strong> {shipment?.shipper?.name}</p>
            <p><strong>Address:</strong> {shipment?.shipper?.address}</p>
          </div>
          <div className="column">
            <h4>Receiver</h4>
            <p><strong>Name:</strong> {shipment?.receiver?.name}</p>
            <p><strong>Address:</strong> {shipment?.receiver?.address}</p>
          </div>
        </div>
      </section>

      {/* Shipment Description */}
      <section>
        <h3>Shipment Description</h3>
        <table className="description-table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Quantity</th>
              <th>Item</th>
            </tr>
          </thead>
          <tbody>
            {shipment?.contents?.map((item, index) => (
              <tr key={index}>
                <td>{item.serial}</td>
                <td>{item.quantity}</td>
                <td>{item.item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Travel History */}
      <section>
        <h3>Shipment Travel History</h3>
        <table className="history-table">
          <thead>
            <tr>
              <th>Date/Time</th>
              <th>Activity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {shipment?.travel_history?.map((event, index) => (
              <tr key={index}>
                <td>{event.date}</td>
                <td>{event.activity}</td>
                <td>{event.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Status Note */}
      <section>
        <h3>Status Note</h3>
        <p>{shipment?.note || "bany provided a note!."}</p>
      </section>
    </div>
  );
}

export default ResultsPage;