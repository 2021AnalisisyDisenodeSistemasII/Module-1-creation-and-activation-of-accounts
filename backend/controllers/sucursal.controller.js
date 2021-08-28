// import JSON management instance
const { DBController } = require("../DB/DB.controller");

// get all sucursals ids and cities
function get_all_sucursals(req, res) {
    var sucursal_list = DBController.getData("sucursals.json");
    var sucursals = Object.keys(sucursal_list).map(sucursal_id => ({ "sucursal_id": sucursal_id, "city": sucursal_list[sucursal_id]["city"] }))
    res.send({ "sucursals": sucursals });
}

module.exports = { get_all_sucursals };