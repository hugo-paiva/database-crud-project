const express = require('express')
const cors = require('cors')
const server = express()
const PORT = 3000
const {Client} = require('pg')

function initClient()  {
    return new Client({
        user:'postgres',
        password: 'cueiozim',
        host: 'localhost',
        port: 5432,
        database: 'Mapeamento_geologico'
    })
}

const query = 'SELECT * FROM points'

async function connection() {
    const client = initClient()
    client.connect()
    const res = await client.query(query)
    const resultado = res.rows[0]
    console.log(resultado)
    await client.end()
    return resultado
}

const corsOptions = {
    origin: 'http://localhost:8080'
}

server.use(cors(corsOptions))

server.get('/getname', async (req, res) => {
    const json = await connection()
    res.json(json)
})

server.listen(PORT, () => {
    console.log(`Backend running in port ${PORT}`)
})