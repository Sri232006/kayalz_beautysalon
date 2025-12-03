import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import WorkerPage from "./components/WorkerPage";
import AdminDashboard from "./admin/AdminDashboard";
import AdminRoute from "./utils/AdminRoute";

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

        {/* Admin Dashboard (Protected Route) */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;