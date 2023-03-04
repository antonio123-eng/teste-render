import express from 'express'
import cors from 'cors'
import routes from './routes/Router.js'
import connectDB from './db/conn.js'

const app = express()
app.use(cors())
app.use(express.json())


app.use("/api", routes)

const start = async() => {
   try {
        await connectDB(`mongodb+srv://patricio:Bf2cVOPfx83d8UWQ@cluster0.f14a53f.mongodb.net/?retryWrites=true&w=majority`) 
        app.listen(12345, () => console.log("Servidor rodando"))
   } catch (error) {
      console.log(error)
   }
} 
start()