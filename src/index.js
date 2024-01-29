import 'dotenv/config'
import {app} from './app.js'
import { ConnectDB } from './db/index.js'
ConnectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`listening on ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(err)
})
