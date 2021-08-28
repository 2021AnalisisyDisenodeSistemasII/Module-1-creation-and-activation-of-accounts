// import the backend request receiver
const cors = require('cors');
// import the backend server creator
const express = require("express");
// import the parser module for json request and response bodys 
const bodyParser = require("body-parser");

// create the server
const app = express();

// apply request receiver
app.use(cors())
// apply parse json
app.use(bodyParser.json());

// add the server routes 
const routes = require("./Router/router");
app.use("/", routes);

// start the server
app.listen(PORT = 3000, () => {
    console.log(`Backend listening on URL: http://[::1]:${PORT}`)
})