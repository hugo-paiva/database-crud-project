const express = require('express')
const app = express()
const PORT = 8080

app.use(express.static('src'))

app.listen(PORT, () => {
    console.log(`Frontend running at PORT ${PORT} `)
})