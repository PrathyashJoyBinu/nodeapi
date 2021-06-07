const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const server= express()
const port = 3000
const url ="mongodb+srv://sreejithAdmin:adminPass@mediadb.6atzb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


const postCredential = require('./postData')
const apitest = require('./apitest')

mongoose.connect(url, {useNewUrlParser: true}, () => {
    console.log("Connected to DB")
})

server.use(cors())
server.use(bodyParser.json())

server.use('/post', postCredential)
server.use('/test',apitest)

server.listen(process.env.PORT||port,()=>{
    console.log(`api listening at http://localhost:${port}`)
})