import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import Header from "./Header";
import AdminHeader from "./AdminHeader"; // Import AdminHeader

const Layout = ({ children }) => {
  const location = useLocation(); // Get current route
  const hideAdminHeaderOnRoutes = ["/admin"]; // Hide AdminHeader on login page

  return (
    <div>
      {/* Show AdminHeader only if NOT on login page */}
      {!hideAdminHeaderOnRoutes.includes(location.pathname) && <AdminHeader />}

      {/* Show common Header */}
      <Header /> 

      <main>{children}</main> {/* Render page content */}
    </div>
  );
};

export default Layout;
