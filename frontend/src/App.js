import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // ✅ Use BrowserRouter
import UserPage from "./pages/UserPage";
import Registration from "./pages/Registration";
import Layout from "./components/Layout/Layout"; 
import { ToastContainer } from "react-toastify"; // ✅ Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // ✅ Import toast styles

function App() {
  return (
    
    <Layout>  {/* ✅ Wrap with Layout to include Header */}
     <ToastContainer />
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Layout>
  );
}

export default App;
