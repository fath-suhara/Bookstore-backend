const express=require('express')
const cors=require('cors')
const connectdb=require('./DataBase/db')
const app=express()

connectdb()
app.use(cors())
app.use(express.json())


const BookRoutes = require('./Routes/BookRoutes')
app.use('/BookStoreAPI',BookRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
    
})