const express = require ('express');
const app = express();
const tasks = require('./routes/taskRoutes')
const connectDB = require('./connectDB/connect');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler')

dotenv.config()
connectDB()

//middleware
app.use(express.static('./public'))
app.use(express.json())


// routes
app.use('/api/v1/tasks',tasks)

app.use(errorHandler);


 



const PORT = 8007;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})