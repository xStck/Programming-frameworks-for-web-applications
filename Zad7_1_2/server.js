require("./models/db")
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const membershipController = require("./controllers/membershipController")
const PORT = 3000;

const app = express()

app.use(bodyParser.json()) //obsługa danych w formacie json

app.use(cors())

app.use("/", membershipController)

app.listen(PORT, function(){
 console.log('Server running on localhost port: ', PORT)
})
