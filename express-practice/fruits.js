//1- Create a new file call it fruits.js

//2- At the top load express & initialize your express app

const express = require('express')

const app = express()

const PORT = 3000;

//3- Copy the fruits array (located at the bottom) and paste it on the following line of your fruits.js file

const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
];

//4- Create a root route that sends a welcome message.

        app.get('/', (req, res) =>{
            res.send('Welcome!!')
        })

        app.get('/fruits', (req, res) =>{
            res.send(fruits)
        })

//5- Create a '/fruits' route that sends the entire fruits array.

app.get('/fruits/:index',(req,res) => {
    res.send(fruits[req.params.index])

})

app.get('/fruits/search/:name',(req, res) =>{
 console.log(req.params.name);
 const results = fruits.filter(item => item.name === req.params.name) 
 console.log(results)
 res.send(results)
})
//6- Create a '/fruits/:index' route that will use the 'index' parameter to send back a fruit object by the index

app.get('/fruits/:index',(req,res) => {
    res.send(fruits)

})

//Create a '/fruits/search/:name' route that will use the 'name' parameter to find a fruit by its name send the corresponding object back

//HINT -> filter method
 

app.listen(PORT, () => {
    console.log('Fruits Server is running...')

})