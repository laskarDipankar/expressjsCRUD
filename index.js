//importing express
const express = require('express')
// const { useAsyncError } = require('react-router')
const Poeple = require('./Model/People')
// const MongoUrl = require('./env')

//requiring routes from router folder
const indiviDualroute =  require('./router/People')

//setting dynamic ports
const port = process.env.PORT || 8001

//creating a express function duplicate to play with
const app = express()

app.use(express.json())

//require mongodb connection
require('./database/connection')

//importing database schema 
const People = require('./Model/People')

//creating new router
const router = new express.Router();

//register router
app.use(router)

//defining router

router.get("/hi",(req,res)=>{
    res.send("Welcome to my Api")
})

//using the imported route path 

app.use(indiviDualroute)

// const mongoose = require('mongoose')
// mongoose.connect("mongodb://localhost:27017/dbmongo")




// app.post("/mongo",(req,res)=>{
//     console.log(req.body)

//     const regPeople = new People(req.body)
//     regPeople.save().then(()=>{
//         res.send(regPeople)
//     }).catch((err)=>{
//         res.status(400).send(err)
//     })
//     res.send("lets beat it")
// })

app.post('/users',async(req,res)=>{

    try {
        
    const regPeople = new People(req.body)
    const savePeople = await regPeople.save()
    res.status(201).send(savePeople)
    console.log(req.body)
    
} catch (error) {
    res.status(400).send(error)
}
    
        
})
    

    

app.get("/users",async (req,res)=>{

    People.find({},(error,data)=>{
        if(error){
            res.send(error)
        }
        else{
            res.send(data)
        }
    })

    // res.send("hello from the other side")

})

app.get("/users/:id",async (req,res)=>{

    _id = req.params.id

    People.findById(_id,(error,data)=>{
        if(error){
            res.send(error)
        }
        else{
            res.send(data)
        }
    })

    // res.send("hello from the other side")

})


app.patch("/user/:id",async(req,res)=>{
    try {
        const _id = req.params.id
       const UpdatedPeople = await People.findByIdAndUpdate(_id,req.body,{
        new:true
       })
       res.send(UpdatedPeople)
    } catch (error) {
        res.status(400).send(error)
    }

})

//delete person
app.delete("/user/:id",async(req,res)=>{
    try {
        const _id = req.params.id
        const removePerson = await People.findByIdAndDelete(_id);
        console.log(_id)
        if(!_id){
            return res.status(400).send()
        }
        res.send(removePerson)
    } catch (error) {
        res.status(500).send(error)
    }
})








app.listen(port,()=>{
    console.log(`connection is running on the server at ${port}`)
})