const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const connectDatabase = require('./configs/database')
const authRoutes = require('./router/authRoutes')
const openAiRoutes = require('./router/openAiRoutes')
const errorHandler = require('./middlewares/errorMiddleware')
const path = require('path')
// connecting database
connectDatabase()


const corsOptions = {
    origin: '*', // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (if needed)
    optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

//intilizing app
const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(errorHandler)

// Middleware to handle CORS
app.options((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method == 'OPTIONS') {
        // Handling preflight requests
        res.sendStatus(200).end();
        return
    }
});



// app.use('*', (req, res) => {

//     res.sendFile(path.join(__dirname, '../client/build/index.html'))
// })


// REST API Routes
app.use('/api/v1/auth/', authRoutes)
app.use('/api/v1/openai', openAiRoutes)



// starting server on port 8080
app.listen(process.env.PORT, () => console.log('server started successfully'))