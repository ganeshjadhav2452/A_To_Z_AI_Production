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
app.use(express.json())
app.use(morgan('dev'))
app.use(errorHandler)
app.use(cors(corsOptions))

//deployment code for sending frontend

app.use('*', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, PATCH, DELETE, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    next()
})

app.use('*', (req, res) => {

    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})


// REST API Routes
app.use('/api/v1/auth/', authRoutes)
app.use('/api/v1/openai', openAiRoutes)



// starting server on port 8080
app.listen(process.env.PORT, () => console.log('server started successfully'))