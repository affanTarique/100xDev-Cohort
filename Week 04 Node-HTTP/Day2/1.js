const express = require('express')
const app = express()
const path = require("path");

app.use(express.static(path.join(__dirname, "./public")));

app.get('/create-todo', function(req, res) {
    res.json({
        todos
    })
})
app.listen(3000);
