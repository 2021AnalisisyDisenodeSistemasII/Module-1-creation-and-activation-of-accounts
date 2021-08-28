// import the backend server creator
const express = require("express");
// create the cashier routes
const cashierRoutes = express.Router();
// import cashier controllers
const { get_all_cashiers } = require("../controllers/cashier.controller.js");

// get all sucursal cashiers by sucursal id
cashierRoutes.get("/cashiers/:sucursal_id", (req, res) => {
    get_all_cashiers(req, res)
})



module.exports = cashierRoutes;