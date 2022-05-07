var  mongoose = require("mongoose")

mongoose.connect(
    "mongodb+srv://student:student@membership.u40u9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true
    },
    err => {
        if (!err) {
            console.log("Connection succeeded")
        } else {
            console.log("Error in connection: " + err)
        }
    }
)

//require("./models/Membership.model")
