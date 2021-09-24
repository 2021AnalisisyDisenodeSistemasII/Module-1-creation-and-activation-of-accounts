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
app.listen(PORT = 3000, LOCAL_URI = 'localhost', () => {
    console.log(`Backend listening on URL: http://${LOCAL_URI}:${PORT}`)
})

// // create the server
// const app2 = express();

// // apply request receiver
// app2.use(cors())
// // apply parse json
// app2.use(bodyParser.json());

// // add the server routes 
// app2.use("/", routes);

// // start the server
// app2.listen(PORT = 3000, NETWORK_URI = '192.168.1.6', () => {
//     console.log(`Backend listening on URL: http://${NETWORK_URI}:${PORT}`)
// })
