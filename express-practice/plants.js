//load the express package
const express = require('express')

//instance of express
const app = express()
//declare the port number
const PORT = 4000

//Plants Route

app.get('/',(req,res) => {
    res.send(`<h1> Hello Plants</h1>`)
})

const plants = ['orchid', 'lucky bamboo','lily', 'palm']
app.get('/plants/:indexOfPlantArray',(req,res) => {
    res.send(plants[req.params.indexOfPlantArray])
    // res.send(`<h1> Hello Plants</h1>`)
})
//listenre
app.listen(PORT, () => {
    console.log('Plants Server is running...')
})
