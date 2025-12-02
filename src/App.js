import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import WorkerPage from "./components/WorkerPage"; // ⬅ ADD THIS LINE

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workers" element={<WorkerPage />} />  {/* ⬅ ADD THIS */}
      </Routes>
    </Router>
  );
}

export default App;