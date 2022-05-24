//Loads express
const express = require('express')

//import the Controller
const getData = require('./Controllers/getData')

//call getData

const fruitsData = getData()
//create an instance of express
const app = express()
const PORT = 3000

//Middlewae functions
//they update the request as soon as they come in.

app.use((req, res, next) => {
    console.log('Running middleware function!')
    next()//go to the next middleware or to the respons.
})

//JSON Middleware
app.use(express.json())

//if we don't need to read data from the url 
app.use(express.urlencoded({extended: false}))


//Setup view engine
app.set('view engine', 'ejs')
app.set('views', './Views')



//Root route
app.get('/', (req, res) => {
   res.render('home', {pageTitle: 'Home Page', pageHeader: 'Home Page!'})
   
})

//display all fruits
app.get('/fruits', (req, res) => {
  res.render('fruits', {data: fruitsData, pageTitle: 'Fruits page'})
})
//HTML form

app.get('/fruits/new', (req, res) => {
    res.render('new-fruits')
})
app.post('/fruits',(req, res) => {
    console.log(req.body)

    if (req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    }else{
        req.body.readyToEat = false
    }
    fruitsData.push(req.body)
    res.redirect('/fruits')

})

app.listen(PORT, () => {
     console.log(`Server is running on port: ${PORT}`)
})