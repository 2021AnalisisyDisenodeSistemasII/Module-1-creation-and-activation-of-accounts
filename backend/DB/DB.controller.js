// library local file management
const fs = require("fs");
let DBPath = './DB/JSON/'

// util functions 
let DBController = new class {
    constructor() {

    }
    saveData(data, json_name) {
        fs.writeFileSync(DBPath + json_name, JSON.stringify(data))
    }

    getData(json_name) {
        return JSON.parse(fs.readFileSync(DBPath + json_name))
    }
}();

// export JSON management functions
module.exports = {
    DBController
};
