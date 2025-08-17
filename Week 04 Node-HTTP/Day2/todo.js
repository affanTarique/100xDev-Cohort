const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 3000;
app.use(express.json());

app.post('/createTodo', (req, res) => {
    const { title, description } = req.body;

    const newTodo = {
        title: title,
        description: description
    }

    const todo = JSON.stringify(newTodo)

    fs.writeFile('read-writeFile.txt', todo, (err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Failed to create todo' })
        } else {
            return res.status(200).json({ success: true, message: "You have successfully created a todo" })
        }
    });
});

app.get('/getTodo', (req, res) => {
    fs.readFile('read-writeFile.txt', 'utf-8', (err, data) => {
        if (err) {
            return res.status(401).json({ success: false, message: err.message })
        }
    })
})
