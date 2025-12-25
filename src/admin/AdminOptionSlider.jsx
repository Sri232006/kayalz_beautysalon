import React from "react";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "./AdminDashboard";

export default function AdminOptionSlider() {
  const navigate = useNavigate();

  return (
    <div className="admin-option-slider">
      
          <div
            className="option-card"
            onClick={() => navigate("/admin/analytics")}
          >
            <h3>Analytics & Performance</h3>
          </div>
       
          <div
            className="option-card"
            onClick={() => navigate("/admin/employee-overview")}
          >
            <h3>Employee Overview</h3>
          </div>
        
          <div
            className="option-card"
            onClick={() => navigate("/admin/service-transactions")}
          >
            <h3>Service Transactions</h3>
          </div>
       
    </div>
  );
}