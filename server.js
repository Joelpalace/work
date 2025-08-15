const express = require ('express');
const app = express();
const tasks = require('./routes/taskRoutes')
const connectDB = require('./connectDB/connect');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler')
const errorHandlerMiddleware = require('./middleware/errors')

dotenv.config()
connectDB()

//middleware
app.use(express.static('./public'))
app.use(express.json())


// routes
app.use('/api/v1/tasks',tasks)

app.use(errorHandler);
app.use(errorHandlerMiddleware); 


const port = process.env.PORT || 8007;
const start = async () => {
    try {
        await connectDB(process.env.URL)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    } 
}

start()