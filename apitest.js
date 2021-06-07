const express = require('express')
const router = express()

router.get('/apitest',(req, res) =>{
    res.send("Api service Started")
})

module.exports =router