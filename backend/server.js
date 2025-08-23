import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectCloudlinary from './config/cloudlinary.js'

import connectDB from './config/mongodb.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'


//app config

const app = express()
const port  = process.env.PORT || 4000

connectDB()
connectCloudlinary()

//middlewares

app.use(express.json())
app.use(cors())

//API end points

app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)

app.get('/', (req, res)=>{
    res.send("API working")
})

app.listen(port, ()=>{
    console.log(`Server stated at ${port}`)
})