

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";  //
import UserPage from "./pages/UserPage";
import Registration from "./pages/Registration";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Layout from "./components/Layout/Layout"; 
import { ToastContainer } from "react-toastify"; // 
import "react-toastify/dist/ReactToastify.css"; //
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from "./components/admin/ProtectedRoute";
function App() {
  return (
    <AuthProvider>
      <Router>
        <ToastContainer />
        <Routes>
          {/* Admin Login page WITHOUT Layout */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route element={<ProtectedRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} /> 
          </Route>

          {/* Pages that use Layout */}
          <Route path="/" element={<Layout><UserPage /></Layout>} />
          <Route path="/register" element={<Layout><Registration /></Layout>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;