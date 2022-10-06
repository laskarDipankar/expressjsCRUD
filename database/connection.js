const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Dipankar45:Dipankar45%40@firstdatabase.8yv0tam.mongodb.net/mongoUser")
.then(()=>{
    console.log('db is connected')
}) .catch((error)=>{
console.log("no connection")
})