import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminOptionSlider = () => {
  const navigate = useNavigate();

  const options = [
    {
      title: "Analytics",
      route: "/admin/analytics",
      color: "#8e2de2",
    },
    {
      title: "Employee Overview",
      route: "/admin/employee-overview",
      color: "#ff416c",
    },
    {
      title: "Service Transactions",
      route: "/admin/service-transactions",
      color: "#1fa2ff",
    },
  ];

  return (
    <div className="admin-option-slider">
      {options.map((opt, index) => (
        <div
          key={index}
          className="option-card"
          style={{ background: opt.color }}
          onClick={() => navigate(opt.route)}
        >
          {opt.title}
        </div>
      ))}
    </div>
  );
};

export default AdminOptionSlider;