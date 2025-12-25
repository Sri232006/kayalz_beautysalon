import { useEffect } from 'react';
import './AboutUs.css';
import { changeSlide, currentSlide, initSlideshow } from './About.js';

export function AboutUs(aboutscroll) {
    useEffect(() => {
        // Initialize slideshow when component mounts
        initSlideshow();
        
        // Cleanup function to clear intervals
        return () => {
            // Any cleanup if needed
        };
    }, []);

    return (
        <>
            {/* Hero Section with Slideshow */}
            <section className="hero-slideshow">
                <h2 className="about-title">ABOUT</h2>
                <div className="slideshow-container" ref={aboutscroll.aboutscroll}>
                    <div className="slide active">
                        <div 
                            className="slide-image" 
                            style={{
                                background: "linear-gradient(rgba(88, 28, 135, 0.4), rgba(88, 28, 135, 0.4)), url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600') center/cover"
                            }}
                        ></div>
                    </div>
                    <div className="slide">
                        <div 
                            className="slide-image" 
                            style={{
                                background: "linear-gradient(rgba(88, 28, 135, 0.4), rgba(88, 28, 135, 0.4)), url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600') center/cover"
                            }}
                        ></div>
                    </div>
                    <div className="slide">
                        <div 
                            className="slide-image" 
                            style={{
                                background: "linear-gradient(rgba(88, 28, 135, 0.4), rgba(88, 28, 135, 0.4)), url('https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1600') center/cover"
                            }}
                        ></div>
                    </div>
                    <div className="slide">
                        <div 
                            className="slide-image" 
                            style={{
                                background: "linear-gradient(rgba(88, 28, 135, 0.4), rgba(88, 28, 135, 0.4)), url('https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1600') center/cover"
                            }}
                        ></div>
                    </div>
                    <div className="slide">
                        <div 
                            className="slide-image" 
                            style={{
                                background: "linear-gradient(rgba(88, 28, 135, 0.4), rgba(88, 28, 135, 0.4)), url('https://images.unsplash.com/photo-1595475884562-073c30d45670?w=1600') center/cover"
                            }}
                        ></div>
                    </div>

                    <div className="hero-content">
                        <h1 className="hero-title">Kayalz Beauty</h1>
                        <p className="hero-subtitle">Where elegance meets expertise</p>
                    </div>

                    {/* Slideshow Controls */}
                    <button className="slide-btn prev" onClick={() => changeSlide(-1)}>&#10094;</button>
                    <button className="slide-btn next" onClick={() => changeSlide(1)}>&#10095;</button>

                    <div className="slide-dots">
                        <span className="dot active" onClick={() => currentSlide(0)}></span>
                        <span className="dot" onClick={() => currentSlide(1)}></span>
                        <span className="dot" onClick={() => currentSlide(2)}></span>
                        <span className="dot" onClick={() => currentSlide(3)}></span>
                        <span className="dot" onClick={() => currentSlide(4)}></span>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <h3>Kayalz Beauty</h3>
                            <p>Your trusted partner in beauty and wellness since 2015.</p>
                        </div>
                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#gallery">Gallery</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Contact</h4>
                            <p>📍 Madurai, Tamil Nadu</p>
                            <p>📞 +91 98765 43210</p>
                            <p>✉️ info@kayalzbeauty.com</p>
                        </div>
                        <div className="footer-col">
                            <h4>Hours</h4>
                            <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                            <p>Sunday: 10:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 Kayalz Beauty. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}