// import JSON management functions
const { saveAccountData,
    getAccountData } = require("../DB/control.DB");

const crypto = require('crypto');


function get_account_data(req, res) {
    var id = req.params.id
    var accounts = Object.assign({}, getAccountData('current_accounts.json'), getAccountData('saving_accounts.json'))
    var account = accounts[id]
    var data = Object.assign({}, { "isActive": account["isActive"] }, { "balance": account["balance"] })
    res.send(data)
}

function activate_account(req, res) {
    var id = req.body.to_account_id;

    function search_update(id, account_type) {
        var accounts = getAccountData(account_type);
        var account = accounts[id];
        var value = req.body.value;
        console.log(!account["isActive"], account["value"] == 0, value >= 20000);
        if (!account["isActive"] && account["balance"] == 0 && value >= 20000) {
            var trans_id = crypto.randomBytes(4).toString("hex") + '-C';
            var transactions = getAccountData("transactions.json");
            account["balance"] += value;
            account["isActive"] = true;
            account["transactions"].push(trans_id);
            transactions[trans_id] = req.body;
            saveAccountData(transactions, "transactions.json")
            saveAccountData(accounts, account_type);
            res.send(`accounts with id ${id} has been updated`);
        }
        else {
            res.send('error in request body or in account status')
        }
    }

    if (getAccountData('current_accounts.json')[id]) {
        var account_type = 'current_accounts.json'
        return search_update(id, account_type);
    }
    else if (getAccountData('saving_accounts.json')[id]) {
        var account_type = 'saving_accounts.json'
        return search_update(id, account_type);
    }
    else {
        res.send(`accounts with id ${id} not exist`);
    }
}

module.exports = { get_account_data, activate_account };