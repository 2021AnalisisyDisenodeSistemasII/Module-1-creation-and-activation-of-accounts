// import the backend server creator
const express = require("express");
// create the auth routes
const authRoutes = express.Router();
// import auth controllers
const { set_current_cashier, get_current_cashier } = require("../controllers/auth.controller.js");

// set selected sucursal and cashier
authRoutes.post("/login", (req, res) => {
    set_current_cashier(req, res)
})

// get the current logged cashier
authRoutes.get("/login/current", (req, res) => {
    get_current_cashier(req, res)
})
module.exports = authRoutes;