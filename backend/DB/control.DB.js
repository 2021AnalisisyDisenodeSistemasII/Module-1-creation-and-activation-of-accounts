// path to JSON DB
const dataPath = "./DB/JSON/"
// library local file management
const fs = require("fs");

// util functions 

function saveAccountData(data, data_json) {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath + data_json, stringifyData)
}

function getAccountData(data_json) {
    const jsonData = fs.readFileSync(dataPath + data_json)
    return JSON.parse(jsonData)
}

// export JSON management functions
module.exports = {
    saveAccountData,
    getAccountData
};
