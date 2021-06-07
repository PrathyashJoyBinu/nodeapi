const express = require('express')
const router = express()
const credentialModel = require('./models')

router.post('/postCredential',async(req, res, )=>{

    const post = new credentialModel({
        username: req.body.username,
        password: req.body.password
    })

    try {
        const savedPost = await post.save()
        res.send(savedPost)
    }catch (err) {
        console.log(err)
    }
});






module.exports = router