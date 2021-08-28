// import the backend server creator
const express = require("express");
// create the client routes
const clientRoutes = express.Router();
// import client controllers
const { get_client } = require("../controllers/client.controller.js");

// get client by client id
clientRoutes.get('/client/:client_id', (req, res) => {
    get_client(req, res);
});

module.exports = clientRoutes;