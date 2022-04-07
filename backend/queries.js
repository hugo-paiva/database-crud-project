const { Client } = require('pg')

function initClient() {
    return new Client({
        user: 'postgres',
        password: 'senha',
        host: 'localhost',
        port: 5432,
        database: 'Mapeamento_geologico'
    })
}

async function connection(query, params = null) {
    const client = initClient()
    client.connect()
    let res
    let resultado = {
        content: {},
        message: 'default'
    }
    try {
        res = await client.query(query, params)
        resultado.content = res.rows
        resultado.message = 'Sua query foi executada com sucesso!'
    } catch (error) {
        resultado.message = 'Sua query deu erro!'
    }
    console.log(resultado)
    await client.end()
    return resultado
}

const getPoints = async (req, res) => {
    const query = 'SELECT * FROM points'
    const json = await connection(query)
    res.json(json)
}

const getPointById =  async (req, res) => { //TODO: ADICIONAR ESTA AS ROTAS 
    const number = req.params.id
    const query = 'SELECT * FROM points WHERE id = $1'
    const json = await connection(query, [number])
    res.json(json)
}

const createPoint =  async (req, res) => {
    const { number, date, time, latitude, longitude } = req.body
    const query = "INSERT INTO points (number, date, time, latitude, longitude) VALUES ($1, $2, $3, $4, $5)"
    const json = await connection(query, [number, date, time, latitude, longitude])
    res.json(json)
}

const deletePoint =  async (req, res) => {
    const query = 'DELETE FROM points WHERE number = $1'
    const number = parseInt(req.params.id)
    const json = await connection(query, [number])
    res.json(json)
}

const updatePoint =  async (req, res) => {
    const query = 'UPDATE points SET latitude = $1, longitude = $2 WHERE number = $3'
    const number = parseInt(req.params.id)
    const lat = 333
    const long = 666
    const json = await connection(query, [lat, long, number])
    res.json(json)
}

module.exports = {
    getPoints,
    getPointById,
    createPoint,
    deletePoint,
    updatePoint,
}