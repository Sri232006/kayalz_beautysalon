import React from "react";
import "./OfferModal.css";

const OffersModal = ({ onClose }) => {
  const offers = [
    { title: "Combo Offer", desc: "Haircut + Shave + Cleanup", price: "₹349" },
    { title: "Premium Grooming", desc: "Haircut + Shave + D-Tan", price: "₹499" },
    { title: "Coloring Combo", desc: "Haircut + Shave + Black Coloring", price: "₹399" },
    { title: "Massage Combo", desc: "Haircut + Shave + Oil Massage", price: "₹399" },
  ];

  return (
    <div className="offers-modal-overlay">
      <div className="offers-modal">

        <h2 className="offers-title">💝 Combo Offers</h2>

        <div className="offers-list">
          {offers.map((offer, index) => (
            <div key={index} className="offer-card">
              <h3>{offer.title}</h3>
              <p>{offer.desc}</p>
              <span className="price">{offer.price}</span>
            </div>
          ))}
        </div>

        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default OffersModal;