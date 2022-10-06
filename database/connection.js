const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/dbmongo")
.then(()=>{
    console.log('db is connected')
}) .catch((error)=>{
console.log("no connection")
})