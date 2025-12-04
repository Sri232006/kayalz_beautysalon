import React from "react";
import kayalzLogo from "../assets/kayalzlogo.jpg";
import "./AdminDashboard.css";
import AdminOptionSlider from "./AdminOptionSlider";   

const AdminDashboard = () => {
  return (
    <div className="admin-container">

      {/* ===== TOP HEADER ===== */}
      <div className="top-header">

        {/* LEFT LOGO */}
        <div className="left-brand">
          <img src={kayalzLogo} alt="brand" className="brand-logo-big" />
        </div>

        {/* RIGHT SEARCH, NOTIFICATION, SETTINGS */}
        <div className="right-controls">
          <input type="text" className="search-bar" placeholder="Search..." />
          <span className="icon-btn">🔔</span>
          <span className="icon-btn">⚙</span>
        </div>
      </div>

      {/* ===== ADMIN DASHBOARD TITLE ===== */}
      <h1 className="admin-title">Admin Dashboard</h1>

      {/*  SWIPE OPTIONS  (3 cards slide) */}
      <AdminOptionSlider />

      {/* ===== Dashboard Overview ===== */}
      <h2 className="section-title">Dashboard Overview</h2>

      <div className="cards-grid">
        <div className="card">
          <p className="card-label">Total Services Today</p>
          <h1 className="card-value">19</h1>
          <p className="card-footer">↑ 3% vs last period</p>
        </div>

        <div className="card">
          <p className="card-label">Peak Hour of the Day</p>
          <h1 className="card-value">4:00 PM</h1>
          <p className="card-footer">↑ 2% vs last period</p>
        </div>

        <div className="card">
          <p className="card-label">Peak Day in a Week</p>
          <h1 className="card-value">Saturday</h1>
          <p className="card-footer">↑ 1% vs last period</p>
        </div>

        <div className="card">
          <p className="card-label">Peak Week in a Month</p>
          <h1 className="card-value">Week 5</h1>
          <p className="card-footer">↑ 2% vs last period</p>
        </div>

        <div className="card">
          <p className="card-label">Available Employees</p>
          <h1 className="card-value">3</h1>
          <p className="card-footer red">↓ 0% vs last period</p>
        </div>
      </div>

      {/* ===== Employee Analytics ===== */}
      <h2 className="section-title">Employee Analytics</h2>

      <div className="cards-grid">
        <div className="card">
          <p className="card-label">Suresh - Customers Today</p>
          <h1 className="card-value">8</h1>
          <p className="card-footer">↑ 2% vs last period</p>
        </div>

        <div className="card">
          <p className="card-label">Kayalavan - Customers Today</p>
          <h1 className="card-value">6</h1>
          <p className="card-footer">↑ 1% vs last period</p>
        </div>

        <div className="card">
          <p className="card-label">Raja - Customers Today</p>
          <h1 className="card-value">5</h1>
          <p className="card-footer red">↓ 0% vs last period</p>
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;