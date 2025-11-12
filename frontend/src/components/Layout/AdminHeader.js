import React, { useContext } from "react"; 
import { Link } from "react-router-dom";
import Logout from "../admin/Logout";
import { AuthContext } from "../../context/AuthContext";
const AdminHeader = () => {
  
  // Assuming you get the logged-in user from localStorage or context
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white">
      <button type="button" id="sidebarCollapse" className="btn btn-light">
        <i className="fas fa-bars"></i><span></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav navbar-nav ms-auto">
          <li className="nav-item dropdown">
            <div>
              <a href="#" className="nav-item nav-link text-secondary" aria-expanded="false">
                {/* <i className="fas fa-user"></i> <span>{userName}</span> */}

                <span>Welcome, {user ? user.name : "Guest"}!</span>
              </a>
            </div>
          </li>
          <li className="">
            <div >
              <button className="btn btn-link nav-item nav-link text-secondary">
                <Logout />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminHeader;

