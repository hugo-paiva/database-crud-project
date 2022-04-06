const apiURL = 'http://localhost:3000/'
const button = document.querySelector('#button')

button.addEventListener('click', pegarUmNome)

function pegarUmNome() {
    const rota = 'getname'
    fetch(apiURL + rota)
    .then(response => response.json())
    .then(data => console.log(data))
}