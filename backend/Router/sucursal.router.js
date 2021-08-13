// import the backend server creator
const express = require("express");
// create the sucursal routes
const sucursalRoutes = express.Router();
// import sucursal controllers
const { view_all_sucursals, view_all_cashiers, store_sucursal_cashier, get_current_sucursal_cashier } = require("../controllers/sucursal.controller.js");


// get all sucursals id
sucursalRoutes.get("/sucursals", (req, res) => {
    view_all_sucursals(req, res)
})

// get all cashiers by sucursal id
sucursalRoutes.get("/sucursal/cashiers/:id", (req, res) => {
    view_all_cashiers(req, res)
})

// post selected sucursal and cashier
sucursalRoutes.post("/login", (req, res) => {
    store_sucursal_cashier(req, res)
})


sucursalRoutes.get("/sucursal/cashier", (req, res) => {
    get_current_sucursal_cashier(req, res)
})

module.exports = sucursalRoutes;