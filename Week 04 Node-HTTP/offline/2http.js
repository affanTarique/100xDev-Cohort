//allow other machine to see your logic???????????? how???????? here comes in picture--query parameters
//localhost:3/?n=3  question is how would i cath this parameter (req.query.n)

const express = require("express");

const app = express();

function sum (n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans = ans +i ;
    }
    return ans;
}

app.get("/", function(req,res) {
    const n = req.query.n;
    const ans = sum(n);
    res.send("hii your answer is " + ans);

})

app.listen(3000);