const express = require('express')
const ejs =  require('ejs')
const path = require('path')

const app = express();


//set ejs as the engine view 
app.set('view engine','ejs');



// route to render the ejs page
app.get('/', (req,res)=>{
    const userDetails = {
        name : "Ali",
        age : 22,
        place : "Kozhikode"
    }
    res.render('index',{user : userDetails})
})


//server 
const port = 3000
app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
    
})