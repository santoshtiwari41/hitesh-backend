import 'dotenv/config'
import express from 'express'
const app = express()
import { ConnectDB } from './db/index.js'
ConnectDB()
app.listen(process.env.PORT,()=>{
    console.log(`listening on ${process.env.PORT}`)
})