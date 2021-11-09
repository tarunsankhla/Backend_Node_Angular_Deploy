const express = require('express');
const app = express();

// let bodyParser = require('body-parser');

// var jsonParser = bodyParser.json()

// const bodyparser = require("body-parser");

// app.use(express.json());
// app.use(bodyparser.urlencoded({extended : false}));
// app.use(bodyparser.json());
app.use(express.static('angular-basic')); //node serve folder as static

app.listen(8082);
console.log("App listennint to port 8082");