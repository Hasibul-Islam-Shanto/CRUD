const mongoose = require('mongoose')
const InfoSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String
})
const Info = mongoose.model("Info", InfoSchema)
module.exports = Info