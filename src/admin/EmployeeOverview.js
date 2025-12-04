import React from "react";
import "./EmployeeOverview.css";

function EmployeeOverview() {
  const employees = [
    {
      name: "Sarah",
      role: "Senior Stylist",
      status: "Available",
      customersToday: 8,
      customersWeek: 18,
      ranking: 100,
      image:
        "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
    },
    {
      name: "Jessica",
      role: "Hair Specialist",
      status: "Busy",
      customersToday: 6,
      customersWeek: 15,
      ranking: 67,
      image:
        "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
    },
    {
      name: "Amanda",
      role: "Nail Technician",
      status: "Available",
      customersToday: 5,
      customersWeek: 12,
      ranking: 33,
      image:
        "https://cdn-icons-png.flaticon.com/512/2922/2922688.png",
    },
  ];

  return (
    <div className="overview-container">
      <h2 className="page-title">Employee Overview</h2>

      <div className="employee-grid">
        {employees.map((emp, index) => (
          <div className="employee-card" key={index}>
            <div className="emp-header">
              <img src={emp.image} alt={emp.name} className="emp-img" />
              <div>
                <h3>{emp.name}</h3>
                <p>{emp.role}</p>
              </div>

              <span
                className={
                  emp.status === "Available"
                    ? "status available"
                    : "status busy"
                }
              >
                {emp.status}
              </span>
            </div>

            <div className="stats">
              <p>
                📊 Customers Today: <span>{emp.customersToday}</span>
              </p>
              <p>
                📈 This Week: <span>{emp.customersWeek}</span>
              </p>
            </div>

            <div className="ranking">
              <p>
                Ranking #{index + 1} – {emp.ranking}%
              </p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${emp.ranking}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeOverview;