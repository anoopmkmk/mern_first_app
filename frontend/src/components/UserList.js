import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch Users from Backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Delete User Function
  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:5001/api/users/${userId}`);
        toast.success("User deleted successfully!");
        fetchUsers(); // Refresh list after deletion
      } catch (error) {
        console.error("Error deleting user:", error);
        toast.error("Failed to delete user.");
      }
    }
  };

  return (
    <div>
      <h2>User List</h2>
      <Link to="/register">
        <button>Add New User</button>
      </Link>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
            <button onClick={() => handleDelete(user._id)} style={{ marginLeft: "10px", color: "red" }}>
              Delete
            </button>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
