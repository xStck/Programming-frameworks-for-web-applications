const mongoose = require("mongoose")
const membershipSchema = new mongoose.Schema({
    memberName: String,
    email: String
})
module.exports = mongoose.model("Membership", membershipSchema)