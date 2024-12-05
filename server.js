const express=require('express');
const morgan=require('morgan');
const cors=require('cors')
const bodyParser=require('body-parser');
const colors=require('colors');
const dotenv=require('dotenv')
const connectDB=require('./config/db')
const authRoutes=require('./routes/authRoutes')
const openaiRoutes=require('./routes/openaiRoutes')
const errorHandler = require('./middelwares/errorMiddleware')
dotenv.config()
connectDB();

const app=express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(errorHandler)

const PORT=process.env.PORT||5000

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/openai",openaiRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
