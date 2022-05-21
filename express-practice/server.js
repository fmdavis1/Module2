//load the package express
const express = require('express')

//create an instance of express
const app = express()
//create our routes and handle our routes
app.get('/', (req, res) =>{
    // console.log(req);
    res.send('Hello Express!!').status(200)
})

app.get('/home', (req, res) =>{
    res.send('<h1> Home Pag </h1>').status(200)
})


app.get('/about', (req, res) =>{
    res.send(`<h1> Home Pages </h1>
                <p> This is the way</p>`).status(200)
})
//listen for requests

app.listen(3000, () => {
    console.log('Server is running..');
})

