const express = require('express')
const cors = require('cors')
const server = express()
const PORT = 3000
const database = require('./queries.js')

const corsOptions = {
    origin: 'http://localhost:8080'
}

server.use(cors(corsOptions))
server.use(express.json())

server.get('/get-points', database.getPoints)

server.post('/create-point', database.createPoint)

server.post('/create-point-withtime', database.createPointWithTime)

server.delete('/delete-point/:id', database.deletePoint)

server.put('/update-point/:id', database.updatePoint)

server.listen(PORT, () => {
    console.log(`Backend running in port ${PORT}`)
})