const express = require("express")
const app = express()
// const port = process.env.PORT || 4000;
const port =  4000;
require("./db/connection")
const cors = require("cors")
app.use(express.json())
const registerschema = require("./schema/registerschema")
app.use(cors())
app.use(express.urlencoded({extended : true}))

app.post("/register",async (req,res)=>{
    try {
        const user = new registerschema(req.body)
        const getuser = await user.save()
        res.json({message : "Registerd succesfully" , data : getuser})
    } catch (error) {
        console.log(error)
    }
})
app.post("/login",async (req,res)=>{
    let {email , password} = req.body
    try {
        const user = await registerschema.findOne({email})
        console.log(user)
        if(!user){
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.log(error)
    }
})
// app.patch("/userget/:id",async (req,res)=>{
//     try{
//       const _id = req.params.id
//       const update = await registerschema.findByIdAndUpdate(_id,req.body,{
//         new : true
//       })
//         console.log(req.body)
//         console.log("update")
//         res.send(update)
//     }
//     catch(error){
//         res.send(error)
//     }
//   })
app.patch("/userget/:id",async (req,res)=>{
    try {
        const _id = req.params.id
        const update = await registerschema.findByIdAndUpdate(_id,req.body,{
         new : true
       })
       res.json({message : "updated sucessflly", data : update})
    } catch (error) {
        console.log(error)
    }
})

app.listen(port,()=>{
    console.log(`server is created succesfully ${port}`)
})