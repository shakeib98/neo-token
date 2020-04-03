import React from "react";
import "./card.css";

export default function Card({
  tHash = "not defined",
  to = "not defined",
  from = "not defined",
  value = "not defined",
}) {
  return (
    <div className="center">
      <div className="card-row">
        <div className="card-item-width">
          <span className="card-label">Transection hash</span>
          <span className="card-label">To</span>
          <span className="card-label">From</span>
          <span className="card-label">Value</span>
        </div>
        <div className="card-item-width">
          <span className="card-label">{tHash}</span>
          <span className="card-label">{to}</span>
          <span className="card-label">{from}</span>
          <span className="card-label">{value}</span>
        </div>
      </div>
    </div>
  );
}
