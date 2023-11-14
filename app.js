
import express from 'express'
import ejs from 'ejs'
import bodyParser from 'body-parser'

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/career', (req, res) => {
    res.render('career')
})

app.post('/career', (req, res) => {
    
})


app.listen(8080, () => {
    console.log("Server running on Port 8080")
})