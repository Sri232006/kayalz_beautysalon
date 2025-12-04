import React from "react";
import "./ServiceTransactions.css";

const ServiceTransactions = () => {
  const logs = [
    {
      customer: "Alice Johnson",
      service: "Haircut & Style",
      employee: "Sarah",
      time: "10:30 AM",
      amount: "$65.00",
      status: "Advance Paid",
    },
    {
      customer: "Maria Garcia",
      service: "Manicure",
      employee: "Jessica",
      time: "11:00 AM",
      amount: "$35.00",
      status: "Pending",
    },
  ];

  return (
    <div className="transactions-container">
      <h2 className="page-title">Service Transactions</h2>

      <div className="transactions-card">
        <h3 className="table-title">Customer Service Logs</h3>

        <table className="service-table">
          <thead>
            <tr>
              <th>CUSTOMER NAME</th>
              <th>SERVICE</th>
              <th>EMPLOYEE</th>
              <th>TIME</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td>{log.customer}</td>
                <td>{log.service}</td>
                <td>{log.employee}</td>
                <td>{log.time}</td>
                <td>{log.amount}</td>
                <td>
                  <span
                    className={
                      log.status === "Advance Paid"
                        ? "status-paid"
                        : "status-pending"
                    }
                  >
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceTransactions;