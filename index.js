const { urlencoded } = require('express')
const express=require('express')
const sequelize = require('sequelize')
const app=express()
const db=require('./config/database')
const USERS=require('./model/Users')
const route=express.Router()


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("<h1>Web server invoked</h1>")
})

app.post('/addUser',async (req,res)=>{
    let {username,password,age}=req.body

     await USERS.create({
        username,
        password,
        age
    })
     .then(user=>
        res.send(user))
     .catch(err=>console.log(err))
})

app.get('/findUser',async(req,res)=>{
    await USERS.findAll({limit:4})
    .then(users=>res.send(users))
    .catch(err=>console.log(err))
})

db.authenticate()
.then(()=>console.log("Database connected..."))
.catch((err)=>console.log(err))


USERS.sync({alter:true}).then(()=>{
    console.log("Table and model synced successfully")
}).catch((err)=>console.log("Error:: "+err))

app.listen(8080,()=>{
    console.log("server invoked at 8080")
})



