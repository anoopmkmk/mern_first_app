

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";  //
import UserPage from "./pages/UserPage";
import Registration from "./pages/Registration";
import AdminLogin from "./pages/admin/AdminLogin";
import Layout from "./components/Layout/Layout"; 
import { ToastContainer } from "react-toastify"; // 
import "react-toastify/dist/ReactToastify.css"; //
function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* Admin Login page WITHOUT Layout */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Pages that use Layout */}
        <Route path="/" element={<Layout><UserPage /></Layout>} />
        <Route path="/register" element={<Layout><Registration /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;