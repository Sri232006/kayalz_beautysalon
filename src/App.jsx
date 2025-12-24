import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import AnalyticsPage from "./admin/AnalyticsPage.jsx";
import EmployeeOverview from "./admin/EmployeeOverview.jsx";
import ServiceTransaction from "./admin/ServiceTransactions.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<AdminDashboard />} />
        <Route path="/Analytics" elemnt={<AnalyticsPage />} />
        <Route path="/EmployeeOverview" element={<EmployeeOverview />} />
        <Route path="/ServiceTransactions" element={<ServiceTransaction />} />
      </Routes>
    </Router>
  );
}

export default App;