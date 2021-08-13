// import the backend server creator
const express = require("express");
// create the account routes
const accountRoutes = express.Router();
// import account controllers
const { get_account_data, activate_account } = require('../controllers/account.controller');

accountRoutes.get('/account/status/:id', (req, res) => {
    get_account_data(req, res)
})

accountRoutes.put('/account/', (req, res) => {
    activate_account(req, res)
})

module.exports = accountRoutes;