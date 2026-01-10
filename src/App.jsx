import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import AnalyticsPage from "./admin/AnalyticsPage.jsx";
import EmployeeOverview from "./admin/EmployeeOverview.jsx";
import ServiceTransaction from "./admin/ServiceTransactions.jsx";

function App() {
  console.log("CLIENT ID:", import.meta.env.VITE_GOOGLE_CLIENT_ID);

  return (

    <GoogleOAuthProvider clientId="276537235274-au9juh2tkap4vi4c1n08etd9b7ar5jls.apps.googleusercontent.com">
      <Router>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login />} />


          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/analytics" element={<AnalyticsPage />} />
          <Route path="/admin/employee-overview" element={<EmployeeOverview />} />
          <Route path="/admin/service-transactions" element={<ServiceTransaction />} />
        </Routes>
      </Router>


    </GoogleOAuthProvider>
  );
}

export default App;