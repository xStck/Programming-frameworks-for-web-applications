const express = require("express")
var router = express.Router()
const mongoose = require("mongoose")
const Membership = mongoose.model("Membership")
router.post("/add", async (req, res) => {
 try {
 const { memberName, email } = req.body
 const existentMember = await Membership.findOne({ email })
 if (!existentMember) {
 const membership = await Membership.create({
 memberName,
 email
 })
 return res.json(membership)
 }
 } catch (error) {
 return res.status(400).json({
 message: 'Email/Member already exist!'
 })
 }
})
module.exports = router