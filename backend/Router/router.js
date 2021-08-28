// import the backend server creator
const express = require("express");
// create the server router
const router = express.Router();

// import the account routes 
const accountRoutes = require("./account.router.js");
// import the sucursal routes 
const sucursalRoutes = require("./sucursal.router.js");
// import the auth routes 
const authRoutes = require("./auth.router.js");
// import the cashier routes 
const cashierRoutes = require("./cashier.router.js");
// import the client routes 
const clientRoutes = require("./client.router.js");

// add the client rotes to the backend server
router.use(clientRoutes);
// add the account rotes to the backend server
router.use(accountRoutes);
// add the sucursal rotes to the backend server
router.use(sucursalRoutes);
// add the auth rotes to the backend server
router.use(authRoutes);
// add the cashier rotes to the backend server
router.use(cashierRoutes);

router.get("/", (req, res) => {
    res.send({ "msg": "Welcome to Mono's Backend" })
});

// export the server routes
module.exports = router;