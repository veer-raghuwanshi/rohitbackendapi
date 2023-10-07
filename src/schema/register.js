const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    
    email : {
        type : String,
    },
    password : {
        type : String,
    },
    
    contact : {
        type : String,
    }
   
    
})

const registers = mongoose.model("registerlogin",schema)
module.exports = registers