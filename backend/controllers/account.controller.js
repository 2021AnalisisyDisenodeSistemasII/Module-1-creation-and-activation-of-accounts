// import JSON management instance
const { DBController } = require("../DB/DB.controller");

function get_short_date() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (month < 10) {
        return (`${day}-0${month}-${year}`)
    } else {
        return (`${day}-${month}-${year}`)
    }
};

function get_random_id(size) {
    var crypto = require('crypto');
    return crypto.randomBytes(size).toString("hex");
};

// get account balance and status
function get_account_data(req, res) {
    var account_id = req.params.account_id;
    var accounts = Object.assign({}, DBController.getData('current_accounts.json'), DBController.getData('saving_accounts.json'));
    var account = accounts[account_id];

    if (account) {
        var data = Object.assign({}, { "isActive": account["isActive"] }, { "balance": account["balance"] });
        return res.send(data);
    } else {
        return res.send({ "msg": "Account not found" });
    };

};

// create an account
function create_account(req, res) {
    var client_id = req.body.client_id;
    var sucursal_id = req.body.sucursal_id;
    var new_account = {
        "isActive": false,
        "client_id": client_id,
        "balance": 0,
        "sucursal_id": sucursal_id,
        "transactions": [],
        "creation_date": get_short_date()
    };
    var new_account_type = req.body.account_type;
    var accounts = DBController.getData(new_account_type);
    var new_account_id = get_random_id(8);


    if (DBController.getData('natural_clients.json')[client_id]) {
        var client_type = 'natural_clients.json';
    }
    else if (DBController.getData('company_clients.json')[client_id]) {
        var client_type = 'company_clients.json';
    }
    else {
        return res.send({ "msg": "Cliente not found" });
    }

    var clients = DBController.getData(client_type);
    clients[client_id]["accounts"].push(new_account_id);
    accounts[new_account_id] = new_account;
    DBController.saveData(accounts, new_account_type)
    DBController.saveData(clients, client_type);
    return res.send({ "account_id": new_account_id, "client_id": req.body.client_id });
}

// perform activation transaction in an account
function activate_account(req, res) {
    var account_id = req.body.to_account_id;
    var consignment_value = req.body.value;

    if (DBController.getData('current_accounts.json')[account_id]) {
        var account_type = 'current_accounts.json';
    }
    else if (DBController.getData('saving_accounts.json')[account_id]) {
        var account_type = 'saving_accounts.json';
    }
    else {
        return res.send({ "msg": "Account not found" });
    }

    var accounts = DBController.getData(account_type);
    var account = accounts[account_id];

    if (account["isActive"] || account["balance"]) {
        return res.send({ "msg": "Account it's already activated" });
    }
    else if (consignment_value < 20000) {
        return res.send({ "msg": "Consignment value too low" });
    }

    var new_transaction_id = get_random_id(4) + '-C';
    var transactions = DBController.getData("transactions.json");
    account["balance"] += consignment_value;
    account["isActive"] = true;
    account["transactions"].push(new_transaction_id);
    transactions[new_transaction_id] = req.body;
    DBController.saveData(transactions, "transactions.json")
    DBController.saveData(accounts, account_type);
    return res.send({ "msg": "Account activated successfully" });

}

module.exports = { get_account_data, activate_account, create_account };