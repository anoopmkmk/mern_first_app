import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ padding: "10px", background: "#FF0000", color: "#fff" }}>
      <nav>
        <Link to="/" style={{ color: "#fff", marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/register" style={{ color: "#fff" }}>
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
