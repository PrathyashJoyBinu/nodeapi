const mongoose = require('mongoose')
const Schema = mongoose.Schema

const credentialSchema = new Schema({

    username: {
      type:String,
      required: true  
    },

    password: {
        type:String,
        required: true 
    }
})

module.exports = mongoose.model('credential',credentialSchema)