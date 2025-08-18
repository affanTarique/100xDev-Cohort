const express = require("express");

const app = express();

app.get("/", function (req,res) {  //any request that come here send them (hello arshu)
    res.send("heloo arshu");    
}) 

app.listen (3000);