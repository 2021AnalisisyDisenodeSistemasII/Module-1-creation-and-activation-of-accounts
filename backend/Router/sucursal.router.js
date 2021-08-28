// import the backend server creator
const express = require("express");
// create the sucursal routes
const sucursalRoutes = express.Router();
// import sucursal controllers
const { get_all_sucursals } = require("../controllers/sucursal.controller.js");

// get all sucursals id
sucursalRoutes.get("/sucursals", (req, res) => {
    get_all_sucursals(req, res)
})

module.exports = sucursalRoutes;