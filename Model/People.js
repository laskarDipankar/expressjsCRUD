const mongoose = require('mongoose')



//schema designing

const PeopleSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:[true ,"you have already registered"]
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    city:{
        type:String,
        required:true
    }

})


const Poeple = new mongoose.model('Peopledb',PeopleSchema)
module.exports = Poeple;