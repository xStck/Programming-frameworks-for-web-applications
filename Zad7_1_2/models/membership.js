const mongoose = require("mongoose")

const membershipSchema = new mongoose.Schema({
    memberName: String,
    email: String,
    phone: String,
    payment: String,
    membershipType: String,
    exercises: Array,
    membershipDate: Date
})

module.exports = mongoose.model("Membership", membershipSchema)