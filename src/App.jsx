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
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/analytics" element={<AnalyticsPage />} />
        <Route path="/admin/employee-overview" element={<EmployeeOverview />} />
        <Route path="/admin/service-transactions" element={<ServiceTransaction />} />
      </Routes>
    </Router>
  );
}

export default App;