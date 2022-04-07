const apiURL = 'http://localhost:3000/'
const button = document.querySelector('#button')
const deleteButton = document.querySelector('#delete-button')
const createButton = document.querySelector('#create-button')
const updateButton = document.querySelector('#update-button')
// number, date, time, latitude, longitude
const number = document.querySelector('#number')
const date = document.querySelector('#date')
const time = document.querySelector('#time')
const latitude = document.querySelector('#latitude')
const longitude = document.querySelector('#longitude')


button.addEventListener('click', pegarUmNome)
deleteButton.addEventListener('click', deleteOne)
createButton.addEventListener('click', createOne)
updateButton.addEventListener('click', updateOne)

function pegarUmNome() {
    const rota = 'getname'
    fetch(apiURL + rota)
        .then(response => response.json())
        .then(data => console.log(data))
}

function deleteOne() {
    const rota = 'delete-point/1'
    fetch(apiURL + rota, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => console.log(data))
}

function createOne() {
    const rota = 'create-point'
    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            number: '1',
            date: '01-01-2020',
            // date: new Date().getDate(),
            time: '12:00',
            latitude: 100000,
            longitude: 100000
        }),
        // body: JSON.stringify({
        //     number: number.value,
        //     date: date.value,
        //     // date: new Date().getDate(),
        //     time: time.value,
        //     latitude: latitude.value,
        //     longitude: longitude.value
        // })
    }
    fetch(apiURL + rota, config)
        .then(response => response.json())
        .then(data => console.log(data))
}

function updateOne() {
    const rota = 'update-point/1'
    fetch(apiURL + rota, { method: 'PUT' })
        .then(response => response.json())
        .then(data => console.log(data))
}