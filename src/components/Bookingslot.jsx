import React, { useState } from "react";
import "./Bookingslot.css";
import worker1 from "../assets/worker1.jpg";
import worker2 from "../assets/worker2.jpg";
import worker3 from "../assets/worker3.jpg";

const employees = [
  {
    id: 1,
    name: "C.Suresh",
    photo: worker1
  },
  {
    id: 2,
    name: "L.kayalavan",
    photo: worker2
  },
  {
    id: 3,
    name: "Raja",
    photo: worker3
  }
];

export default function BookingSlot(scrollbook) {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = () => {
    if (!customerName || !phone || !selectedEmployee) {
      alert("Please fill all fields");
      return;
    }
    alert(`Booking Confirmed for ${customerName}`);
  };

  return (
    <div className="booking-container" >
<h1 className="booking-heading" ref={scrollbook.scrollbook}>BOOK YOUR SLOT</h1>

      {/* Input fields */}
      <input
        type="text"
        placeholder="Customer Name"
        className="book-input-box"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Phone Number"
        className="book-input-box"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      {/* Employee Cards */}
      <h3 className="select-text">Select Employee</h3>

      <div className="employee-list">
        {employees.map((emp) => (
          <div
            key={emp.id}
            className={`employee-card ${selectedEmployee?.id === emp.id ? "active" : ""}`}
            onClick={() => setSelectedEmployee(emp)}
          >
            <img src={emp.photo} className="emp-photo" alt={emp.name} />
            <p className="emp-name">{emp.name}</p>
          </div>
        ))}
      </div>
      <p>Select a Time:</p>

      <input
        type="time"
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
        className="time-input"
      />

      {/* Preview Section */}
      <div className="preview-box">
        <h3>Preview</h3>
        <p><strong>Name:</strong> {customerName || "—"}</p>
        <p><strong>Phone:</strong> {phone || "—"}</p>
        <p><strong>Time:</strong> {selectedTime || "—"}</p>
        <p><strong>Employee:</strong> {selectedEmployee?.name || "—"}</p>
      </div>

      <button className="confirm-btn" onClick={handleSubmit}>
        Confirm Booking
      </button>
    </div>
  );
}

