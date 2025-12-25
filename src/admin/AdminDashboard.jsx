import React from "react";
import kayalzLogo from "../assets/kayalzlogo.png";
import "./AdminDashboard.css";
import AdminOptionSlider from "./AdminOptionSlider";

const AdminDashboard = () => {
  return (
    <div className="admin-container">

      {/* ===== TOP HEADER ===== */}
      <div className="top-header">
        {/* LEFT LOGO */}
        <div className="left-brand">
          <img
            src={kayalzLogo}
            alt="Kayalz Salon"
            className="brand-logo-big"
          />
        </div>

        {/* RIGHT AREA (future: search / notification / settings) */}
        <div className="right-actions"></div>
      </div>

      {/* ===== ADMIN DASHBOARD TITLE ===== */}
      <h1 className="admin-title">Admin Dashboard</h1>

      {/* ===== SLIDER OPTIONS ===== */}
      <AdminOptionSlider />

      {/* ===== DASHBOARD OVERVIEW ===== */}
      <h2 className="section-title">Dashboard Overview</h2>

      <div className="cards-grid">
        <div className="card">
          <p className="card-label">Total Services Today</p>
          <h1 className="card-value">19</h1>
        </div>

        <div className="card">
          <p className="card-label">Peak Hour of the Day</p>
          <h1 className="card-value">4:00 PM</h1>
        </div>

        <div className="card">
          <p className="card-label">Peak Day in a Week</p>
          <h1 className="card-value">Saturday</h1>
        </div>

        <div className="card">
          <p className="card-label">Peak Week in a Month</p>
          <h1 className="card-value">Week 5</h1>
        </div>

        <div className="card">
          <p className="card-label">Available Employees</p>
          <h1 className="card-value">3</h1>
        </div>
      </div>

      {/* ===== EMPLOYEE ANALYTICS ===== */}
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