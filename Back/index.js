require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./src/routes')


const PORT = process.env.PORT || 3001;

const server = express()
server.use(express.json())
server.use(morgan('dev'))
server.use(cors())

server.use('/', router)
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})