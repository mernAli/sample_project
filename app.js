const express = require('express')
const ejs = require('ejs')
const path = require('path');
const { log } = require('console');

const app = express()

app.use(express.urlencoded({extended:true}))//required when submiting forms

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render('home', {title:'Home page'} )
})


const userdata = {
    name : 'Ali',
    age : 22,
    country : 'India'
}
app.get('/profile',(req,res)=>{
    res.render('profile',{title : 'profile page',userdata})
});

app.get('/login',(req,res)=>{
    res.render('login',{title : 'login page'})
})


app.post('/login',(req,res)=>{
    console.log(req.body);
    const result = req.body;

    if(!result.name||!result.age||!result.place){
        res.send('Plz fill the whole form')
    }else(
        res.send(`Name : ${result.name}     Age : ${result.age}     place : ${result.place}`)
    )

   
})



//start the server:
const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
    
})

