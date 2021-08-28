// import the backend server creator
const express = require("express");
// create the account routes
const accountRoutes = express.Router();
// import account controllers
const { get_account_data, activate_account, create_account } = require('../controllers/account.controller');

accountRoutes.get('/account/:account_id', (req, res) => {
    get_account_data(req, res)
})

accountRoutes.put('/accounts', (req, res) => {
    activate_account(req, res)
})

accountRoutes.post('/accounts', (req, res) => {
    create_account(req, res)
})

module.exports = accountRoutes;