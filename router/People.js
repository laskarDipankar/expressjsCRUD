const express = require('express')


const router = new express.Router


router.get("/individual",(req,res)=>{
    res.send("hope you are having a nice day")
})

module.exports = router