// import JSON management instance
const { DBController } = require("../DB/DB.controller");

// get client by client id
function get_client(req, res) {
    let client_id = req.params.client_id
    let clients = Object.assign({}, DBController.getData("natural_clients.json"), DBController.getData("company_clients.json"))
    let client = clients[client_id]
    if (client) {
        delete client["accounts"]
        res.send(client)
    } else {
        res.send({ "msg": "Client not found" })
    }

}

module.exports = { get_client };