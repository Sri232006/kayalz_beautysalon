import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import WorkerPage from "./components/WorkerPage";
import AdminDashboard from "./admin/AdminDashboard";
import AdminRoute from "./utils/AdminRoute";
import AnalyticsPage from "./admin/AnalyticsPage";
import EmployeeOverview from "./admin/EmployeeOverview";
import ServiceTransactions from "./admin/ServiceTransactions";  

function App() {
  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Normal User Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Worker Page */}
        <Route path="/workers" element={<WorkerPage />} />

        {/* Admin Dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        {/* Admin Analytics */}
        <Route
          path="/admin/analytics"
          element={
            <AdminRoute>
              <AnalyticsPage />
            </AdminRoute>
          }
        />

        {/* Admin Employee Overview */}
        <Route
          path="/admin/employee-overview"
          element={
            <AdminRoute>
              <EmployeeOverview />
            </AdminRoute>
          }
        />

        {/*  Admin Service Transactions */}
        <Route
          path="/admin/service-transactions"
          element={
            <AdminRoute>
              <ServiceTransactions />
            </AdminRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;