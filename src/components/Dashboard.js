import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import kayalzLogo from "../assets/kayalzlogo.jpg";
import "./Dashboard.css";
import ReviewModal from "./ReviewModal";

const Dashboard = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  
  const addReview = (newReview) => {
    setReviews((prevReviews) => [newReview, ...prevReviews]);
    setModalOpen(false);
  };

  return (
    <div className="dashboard-page">
      {/* Header */}
      <div className="header-main">
        <img src={kayalzLogo} alt="Brand Logo" className="brand-logo" />
        <div className="menu-icon">⋮</div>
      </div>

      {/* Contact Bar */}
      <div className="contact-bar">
        <div className="contact-item">📞 +1 934 303 4865</div>
        <div className="contact-item">✉ hello@kayalzbeauty.com</div>
        <div className="contact-item">📍 123 Luxury Lane, New York, NY 10001</div>
      </div>

      {/* Tagline */}
      <h2 className="tagline">
        GROOM YOUR <span>HAIRSTYLE</span> . BLOOM <br />
        IN YOUR <span>LIFESTYLE</span>
      </h2>

      {/* Features */}
      <div className="features-section">
        <div className="feature-card">
          <img src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" className="icon-img" />
          <h2>Offers</h2>
          <p>Exclusive deals and special packages designed for our valued clients</p>
        </div>

        <div className="feature-card">
          <img src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" className="icon-img" />
          <h2>Slots Available</h2>
          <p>Book your perfect time with our flexible scheduling system</p>
        </div>

        <div className="feature-card">
          <img src="https://cdn-icons-png.flaticon.com/512/992/992700.png" className="icon-img" />
          <h2>Sunday Evening Free</h2>
          <p>Special weekend availability for your convenience and relaxation</p>
        </div>

        <div className="feature-card">
          <img src="https://cdn-icons-png.flaticon.com/512/3176/3176365.png" className="icon-img" />
          <h2>Luxury Slots</h2>
          <p>Premium experiences with personalized attention and care</p>
        </div>
      </div>

      {/* Worker Page Button */}
      <button className="worker-btn" onClick={() => navigate("/workers")}>
        👥 View Workers
      </button>

      {/* Plus Button to Add Review */}
      <div className="plus-btn" onClick={() => setModalOpen(true)}>+</div>

      {/* Client Reviews */}
      <h1 className="review-heading">CLIENT REVIEWS</h1>
      <div className="review-container">
        {reviews.length === 0 ? (
          <p className="no-reviews">No reviews yet. Click + to add one!</p>
        ) : (
          reviews.map((r, i) => (
            <div key={i} className="review-card">
              <div className="star-container">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className={star <= r.rating ? "star filled" : "star"}>★</span>
                ))}
              </div>
              <h3>{r.name}</h3>
              <p>{r.review}</p>
            </div>
          ))
        )}
      </div>

      {/* Review Modal */}
      {isModalOpen && (
        <ReviewModal 
          onClose={() => setModalOpen(false)}
          onSubmit={addReview}
        />
      )}
    </div>
  );
};

export default Dashboard;