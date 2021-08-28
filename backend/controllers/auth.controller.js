// import JSON management instance
const { DBController } = require("../DB/DB.controller");

// set selected sucursal and cashier
function set_current_cashier(req, res) {
    var current_log = DBController.getData("current_sucursal_cashier.json")
    current_log["data"] = req.body
    DBController.saveData(current_log, "current_sucursal_cashier.json")
    res.send(current_log["data"])
}

// get the current logged cashier
function get_current_cashier(req, res) {
    var current = DBController.getData("current_sucursal_cashier.json")["data"]
    res.send(current)
}

module.exports = {
    set_current_cashier,
    get_current_cashier
}