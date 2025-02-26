const express = require("express");
const router = express.Router();

// Middleware to check if user is admin
const adminAuth = (req, res, next) => {
    if (!req.user || !req.user.isAdmin) {
        return res.redirect("/admin/login");
    }
    next();
};



module.exports = router;
