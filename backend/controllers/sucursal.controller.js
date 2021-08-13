// import JSON management functions
const { saveAccountData,
    getAccountData } = require("../DB/control.DB");

// get all sucursals id
function view_all_sucursals(req, res) {
    var sucursal_list = Object.keys(getAccountData("sucursals.json"));
    res.send(sucursal_list);
}

// get all cashiers by sucursal id
function view_all_cashiers(req, res) {
    var sucursal_id = req.params.id;
    var cashiers = getAccountData("sucursals.json")[sucursal_id]["cashiers"];

    res.send(cashiers);
}

function store_sucursal_cashier(req, res) {
    var current_log = getAccountData("current_sucursal_cashier.json")
    current_log["data"] = req.body
    saveAccountData(current_log, "current_sucursal_cashier.json")
    res.send(current_log["data"])
}

function get_current_sucursal_cashier(req, res) {
    var current = getAccountData("current_sucursal_cashier.json")["data"]
    res.send(current)
}



module.exports = { view_all_sucursals, view_all_cashiers, store_sucursal_cashier, get_current_sucursal_cashier };