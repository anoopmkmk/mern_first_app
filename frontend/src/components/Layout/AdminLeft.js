import React from "react";
import { Link } from "react-router-dom";


const AdminLeft = () => {
  // Assuming you get the logged-in user from localStorage or context
  const userName = localStorage.getItem("user") || "Guest";

  return (
    <nav id="sidebar" className="w-64 bg-gray-900 text-white h-screen p-4 fixed">
      <ul className="space-y-4">
        <li>
          <Link to="/admin/dashboard" className="flex items-center gap-2 p-3 hover:bg-gray-700 rounded-lg">
            <i className="fas fa-home"></i> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/buyer" className="flex items-center gap-2 p-3 hover:bg-gray-700 rounded-lg">
            <i className="fab fa-bitcoin"></i> <span>Buyer</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/seller" className="flex items-center gap-2 p-3 hover:bg-gray-700 rounded-lg">
            <i className="fas fa-money-bill"></i> <span>Seller</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/products" className="flex items-center gap-2 p-3 hover:bg-gray-700 rounded-lg">
            <i className="fa fa-product-hunt"></i> <span>Products</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/sales" className="flex items-center gap-2 p-3 hover:bg-gray-700 rounded-lg">
            <i className="fas fa-ad"></i> <span>Sales</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminLeft;
