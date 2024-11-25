const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
    console.log('Middleware')
    next()// Pass control to the next handler
}, (req, res) => {
    res.send("Hello World")
})

app.listen(3000)