const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
    },
    password : {
        type : String,
    },
    address : {
        type : String,
    },
    contact : {
        type : String,
    },
    education : {
        type : String,
    },
    pincode : {
        type : String,
    },
    qualification : {
        type : String,
    },
    certificate : {
        type : String,
    },
})

const registerschema = mongoose.model("register",schema)
module.exports = registerschema