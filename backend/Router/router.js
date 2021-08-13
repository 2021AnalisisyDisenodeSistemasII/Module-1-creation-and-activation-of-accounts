// import the backend server creator
const express = require("express");
// create the server router
const router = express.Router();
// import the account routes 
const accountRoutes = require("./account.router.js");
// import the sucursal routes 
const sucursalRoutes = require("./sucursal.router.js");

// add the account rotes to the backend server
router.use(accountRoutes);
// add the sucursal rotes to the backend server
router.use(sucursalRoutes);

// export the server routes
module.exports = router;