import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectCloudlinary from './config/cloudlinary.js'

import connectDB from './config/mongodb.js'


//app config

const app = express()
const port  = process.env.PORT || 4000

connectDB()
connectCloudlinary()

//middlewares

app.use(express.json())
app.use(cors())

//API end points

app.get('/', (req, res)=>{
    res.send("API working")
})

app.listen(port, ()=>{
    console.log(`Server stated at ${port}`)
})