import { useState } from "react";
import { useNavigate } from "react-router-dom";
import kayalzLogo from "../assets/kayalzlogo.png";
import "./Homepage.css";
import Bookingslot from "./Bookingslot";
import { AboutUs } from "./AboutUs";
import Servicesection from "./Servicesection";
import ReviewModal from "./ReviewModal";
import OffersModal from "./OfferModal";
import WorkersModal from "./WorkerAvailable";
import { useRef } from "react";



const Homepage = () => {

  const navigate = useNavigate();
  const [showOffers, setShowOffers] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [showWorkers, setShowWorkers] = useState(false);


  const addReview = (review) => {
    setReviews([...reviews, review]);
    setModalOpen(false);
  };

  const handleAdminLogin = () => {
    setShowMenu(false);
    navigate("/Login");
  };

  const aboutRef = useRef(null);
  const comboRef = useRef(null);
  const bookRef = useRef(null);
  const serviceRef = useRef(null);

  function scrollToCombo() {

    comboRef.current.scrollIntoView({ behavior: "smooth" });

  };
  
  function scrollToBook() {
    bookRef.current.scrollIntoView({ behavior: "smooth" });
  };

  function scrollToAbout() {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  function scrollToService() {
    serviceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="dashboard-page">

      {/* --------- Header Top --------- */}
      <header className="header-main">

        <h1 className="login-btn" onClick={handleAdminLogin} navigate="/Login">
          Login
        </h1>
        <div className="logo-container">
          <img src={kayalzLogo} alt="Kayalz Beauty" className="brand-logo" />
        </div>
        {/* ===== HEADER ===== */}

        {/* Hamburger */}
        <div
          className={`hamburger ${showMenu ? "active" : ""}`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* ===== TOP SLIDE MENU ===== */}
        <nav className={`top-nav ${showMenu ? "open" : ""}`}>
          <ul>
            <li onClick={() => setShowMenu(false)}>Home</li>
            <li onClick={() => {
              setShowMenu(false)
              scrollToService();
            }}>Services</li>
            <li onClick={() => {
              setShowMenu(false)
              scrollToAbout();
            }}>About</li>
            <li onClick={() => {
              setShowMenu(false)
              scrollToBook();
            }} >Book Your Slot</li>
            <li className="admin-btn" onClick={handleAdminLogin} navigate="/Login">
              Admin Login
            </li>
          </ul>
        </nav>

        {/* ===== OVERLAY ===== */}
        {showMenu && <div className="menu-overlay" onClick={() => setShowMenu(false)} />}
      </header>

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

      {/* Features Section */}
      <div className="features-section">
        {/* OFFERS CARD  */}
        <div
          className="feature-card"
          onClick={() => {

            scrollToCombo();
            setShowOffers(true);
          }}
          style={{ cursor: "pointer" }}
        >
          <img
            src="offer.png"
            className="icon-img"
            alt="Offers"
          />
          <h2>Offers</h2>
          <p>Exclusive combo deals and special packages</p>
        </div>

        {/* Slots Available  */}
        <div
          className="feature-card"
          onClick={() => setShowWorkers(true)}
          style={{ cursor: "pointer" }}
        >
          <img
            src="slot.png"
            className="icon-img"
            alt="Slots Available"
          />
          <h2>Slots Available</h2>
          <p>Book your perfect time with our flexible scheduling system</p>
        </div>

        <div className="feature-card">
          <img
            src="free.png"
            className="icon-img"
            alt="Sunday Evening Free"
          />
          <h2>Sunday Evening Free</h2>
          <p>Special weekend availability for your convenience</p>
        </div>

        <div className="feature-card">
          <img
            src="lux.png"
            className="icon-img"
            alt="Luxury Slots"
          />
          <h2>Luxury Slots</h2>
          <p>Premium experiences with personalized care</p>
        </div>
      </div>

      {/* Plus Button to Add Review */}
      <div className="plus-btn" onClick={() => setModalOpen(true)}>+</div>

      {/* Client Reviews Section */}
      <h1 className="review-heading">CLIENT REVIEWS</h1>

      <div className="review-container">
        {reviews.length === 0 ? (
          <p className="no-reviews">No reviews yet. Click + to add one!</p>
        ) : (
          reviews.map((r, i) => (
            <div key={i} className="review-card">
              <div className="star-container">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={star <= r.rating ? "star filled" : "star"}
                  >
                    ★
                  </span>
                ))}
              </div>
              <h3>{r.name}</h3>
              <p>{r.review}</p>
            </div>
          ))
        )}
      </div>

      <Servicesection comboscroll={comboRef} servicescroll={serviceRef} />
      <Bookingslot scrollbook={bookRef} />
      <AboutUs aboutscroll={aboutRef} />



      {showWorkers && (
        <WorkersModal onClose={() => setShowWorkers(false)} />
      )}
      {/* Review Modal */}
      {isModalOpen && (
        <ReviewModal
          onClose={() => setModalOpen(false)}
          onSubmit={addReview}
        />
      )}

      {showOffers && (
        <OffersModal onClose={() => setShowOffers(false)} />
      )}

      {/* OFFERS MODAL – NEW */}

    </div>
  );
};

export default Homepage;