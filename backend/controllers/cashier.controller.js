// import JSON management instance
const { DBController } = require("../DB/DB.controller");

// get all sucursal cashiers by sucursal id
function get_all_cashiers(req, res) {
    var sucursal_id = req.params.sucursal_id;
    var sucursal = DBController.getData("sucursals.json")[sucursal_id]
    if (sucursal) {
        res.send({ "cashiers": sucursal["cashiers"] });
    } else {
        res.send({ "msg": "Sucursal not found" })
    }

}

module.exports = {
    get_all_cashiers
};