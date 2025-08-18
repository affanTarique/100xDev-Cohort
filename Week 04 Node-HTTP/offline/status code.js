const express = require("express")
const app = express();

var users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}]

app.get("/", function (req, res) {
    
})

app.post("/", function (req, res) {
    
})

app.put("/", function (req, res) {
    
})

app.delete("/", function (req, res) {
    
})

app.listen(3000);









//-------------------------------
const express = require("express")
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function (req, res) {

})
