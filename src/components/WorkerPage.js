import { useState } from "react";
import "./WorkerPage.css";
import bgImage from "../assets/bg-salon.jpg";
import worker1 from "../assets/worker1.jpg";
import worker2 from "../assets/worker2.jpg";
import worker3 from "../assets/worker3.jpg";
import TimeSlotModal from "./TimeSlotModal"; 

const workers = [
  {
    id: 1,
    name: "C. Suresh",
    experience: "25 Years",
    mobile: "9500696436",
    photo: worker1,
    services: [
      "Haircut - ₹150",
      "Shaving - ₹100",
      "Haircut + Shave - ₹250",
      "Face Cleanup - ₹200",
      "Oil Massage (15 mins) - ₹200",
      "Premium Head Massage (30 mins) - ₹500",
      "Hair Colouring Black - ₹200",
      "Black Henna - ₹200",
      "D-Tan - ₹350",
      "Fruit Facial - ₹500",
      "Wine Facial - ₹800",
      "Silver Facial - ₹1500",
      "Gold Facial - ₹2000",
      "Diamond Facial - ₹2500",
      "Warts Removal (per wart) - ₹100",
      "Hair Wash - ₹100",
      "Hair Straightening - Depends on length"
    ]
  },
  {
    id: 2,
    name: "L. Kayalavan",
    experience: "20 Years",
    mobile: "9629153517",
    photo: worker2,
    services: [
      "Haircut - ₹150",
      "Shaving - ₹100",
      "Haircut + Shave - ₹250",
      "Face Cleanup - ₹200",
      "Oil Massage (15 mins) - ₹200",
      "Premium Head Massage (30 mins) - ₹500",
      "Hair Colouring Black - ₹200",
      "Black Henna - ₹200",
      "D-Tan - ₹350",
      "Fruit Facial - ₹500",
      "Wine Facial - ₹800",
      "Silver Facial - ₹1500",
      "Gold Facial - ₹2000",
      "Diamond Facial - ₹2500",
      "Warts Removal (per wart) - ₹100",
      "Hair Wash - ₹100",
      "Hair Straightening - Depends on length"
    ]
  },
  {
    id: 3,
    name: "Raja",
    experience: "5 Years",
    mobile: "7904426383",
    photo: worker3,
    services: [
      "Haircut - ₹150",
      "Shaving - ₹100",
      "Haircut + Shave - ₹250",
      "Face Cleanup - ₹200",
      "Oil Massage (15 mins) - ₹200",
      "Premium Head Massage (30 mins) - ₹500",
      "Hair Colouring Black - ₹200",
      "Black Henna - ₹200",
      "D-Tan - ₹350",
      "Fruit Facial - ₹500",
      "Wine Facial - ₹800",
      "Silver Facial - ₹1500",
      "Gold Facial - ₹2000",
      "Diamond Facial - ₹2500",
      "Warts Removal (per wart) - ₹100",
      "Hair Wash - ₹100",
      "Hair Straightening - Depends on length"
    ]
  }
];

export default function WorkerPage() {
  const [selected, setSelected] = useState(null);        
  const [selectedService, setSelectedService] = useState(null); 

  return (
    <div className="worker-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <h1 className="title">Our Salon Experts</h1>

      <div className="worker-list">
        {workers.map((w) => (
          <div
            key={w.id}
            onClick={() => setSelected(w)}
            className="worker-card"
          >
            <img src={w.photo} alt={w.name} className="worker-photo" />
            <h2 className="worker-name">{w.name}</h2>
            <p className="worker-experience">{w.experience}</p>
            <p className="worker-mobile">📞 {w.mobile}</p>
          </div>
        ))}
      </div>

      {/* Worker Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selected.name}</h2>
            <p><b>Experience:</b> {selected.experience}</p>
            <p><b>Mobile:</b> {selected.mobile}</p>

            <h3 className="services-title">Services</h3>
            <div className="services-list">
              {selected.services.map((s, i) => (
                <button
                  key={i}
                  className="service-button"
                  onClick={() => setSelectedService(s)} 
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Time Slot Modal */}
      {selectedService && (
        <TimeSlotModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onConfirm={(time) => {
            alert(`Booked ${selectedService} at ${time}`);
            setSelectedService(null);
            setSelected(null); 
          }}
        />
      )}
    </div>
  );
}