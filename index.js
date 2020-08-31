//Import Express
const express = require ('express')

//Server erstellen
const app = express()

//Server abrufen
app.listen(3001,() => {
    console.log('Server listening at http:localhost:3001')
})
//Static file server
app.use(express.static('public'))

//Routing
app.get('/', (req,res) => {
    res.sendFile('./views/index.html', {root: __dirname})
})
app.get('/about', (req,res) => {
    res.sendFile('./views/about.html', {root: __dirname})
})
app.get('/solutions', (req,res) => {
    res.sendFile('./views/solutions.html', {root: __dirname})
})
app.get('/community', (req,res) => {
    res.sendFile('./views/community.html', {root: __dirname})
})
app.get('/pricing', (req,res) => {
    res.sendFile('./views/pricing.html', {root: __dirname})
})

//404
app.use((req,res) => {
    res.status(404)
    res.sendFile('./views/404.html', {root: __dirname})
})