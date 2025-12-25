
import './WorkersAvailable.css';
 import worker1 from "../assets/worker1.jpg";
import worker2 from "../assets/worker2.jpg";
import worker3 from "../assets/worker3.jpg";

const WorkersModal = ({ onClose }) => {


  const workers = [
    {
        id: 1,
        name: "C.Suresh",
        photo: worker1,
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
      },
  ];
   return (
         
        <>
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className='worker-title'>👨‍🔧 Available Stylists</h2>
  
            <div className="worker-grid">
              {workers.map((worker) => (
                <div key={worker.id} className="worker-card">
                  <img src={worker.photo} alt={worker.name} />
                  <h3>{worker.name}</h3>
  
                  <span
                    className={`status ${
                      worker.available ? "available" : "busy"
                    }`}
                  >
                    {worker.available ? "Available" : "Busy"}
                  </span>
                </div>
              ))}
            </div>
  
            <button className="close-btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
        </>
      );
    };
  
    export default WorkersModal;