import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserList from "../components/UserList";
import Header from "../components/Layout/Header";

const UserPage = () => {
    return (
        <div>
        <h1>Users List</h1>
        <UserList />
        </div>
    );
    };
export default UserPage;