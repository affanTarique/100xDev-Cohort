const express = require('express');

const app = express();

app.get("/sum", function(req , res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a+b
    })

} );

app.get("/sum", function(req , res) {

} );

app.get("/sum", function(req , res) {

} );

app.get("/sum", function(req , res) {

} );