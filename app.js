
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

//slideshow using javascript





app.listen(8080, () => {
    console.log("Server running on Port 8080")
})