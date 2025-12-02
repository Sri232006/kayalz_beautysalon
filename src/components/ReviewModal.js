import React, { useState } from "react";
import "./ReviewModal.css";

const ReviewModal = ({ onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    if (name && review && rating > 0) {
      onSubmit({ name, review, rating });
      onClose();
    }
  };

  return (
    <div className="review-modal-overlay">
      <div className="review-modal custom-review-bg">
        <h2 className="review-title">Write a Review</h2>

        {/* STAR RATING */}
        <div className="star-container">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? "star filled" : "star"}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <input
          className="input-box"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="input-box"
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit Review
        </button>

        <button className="cancel-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ReviewModal;