
const cors = require('cors');
// import the backend server creator
const express = require("express");
// import the parser module for json request and response bodys 
const bodyParser = require("body-parser");


// create the server
const app = express();

app.use(cors())
// apply parse json
app.use(bodyParser.json());
// apply the parse url encoded request bodys
// app.use(bodyParser.urlencoded({ extended: true }));

// add the server routes 
const routes = require("./Router/router");
app.use("/", routes);

// start the server
app.listen(3000, () => {
    console.log("listening at port:3000")
})