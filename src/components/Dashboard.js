import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-page">

      {/* --------- Header Top --------- */}
      <div className="header-main">
        <h1 className="logo-text">KAYALZ BEAUTY</h1>
        <div className="menu-icon">⋮</div>
      </div>

      {/* --------- Header Contact Bar --------- */}
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

      {/* ------- Features Section -------- */}
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

      {/* Add Button */}
      <div className="plus-btn">+</div>

      {/* Client Reviews */}
      <h1 className="review-heading">CLIENT REVIEWS</h1>

      <div className="review-container">

        <div className="review-card">
          <div className="review-icon">✨✨</div>
          <h3>Olivia corner</h3>
          <p>Special weekend availability for your convenience and relaxation</p>
        </div>

        <div className="review-card">
          <div className="review-icon">✨✨</div>
          <h3>David ralph</h3>
          <p>Special weekend availability for your convenience and relaxation</p>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;