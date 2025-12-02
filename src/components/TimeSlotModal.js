import React, { useState } from "react";
import bgImage from "../assets/bg-salon.jpg";
import "./TimeSlotModal.css";

export default function TimeSlotModal({ service, onClose, onConfirm }) {
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h2>Book: {service}</h2>
        <p>Select a Time:</p>

        <input
          type="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="time-input"
        />

        <button
          className="confirm-button"
          disabled={!selectedTime}
          onClick={() => {
            onConfirm(selectedTime);
            onClose();
          }}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}