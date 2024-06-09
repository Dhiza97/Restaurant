
import express from 'express'
import ejs from 'ejs'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { dirname } from "path"
import { fileURLToPath } from "url"
import pool from './config/db.js'
import homeRoute from './routes/homeRoute.js'
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

dotenv.config();

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.use('/', homeRoute)

// Test database connection
pool.connect((err) => {
    if (err) {
        console.error('Database connection error:', err.stack);
    } else {
        console.log('Connected to the database');
    }
});


app.get('/career', (req, res) => {
    res.render('career')
})

app.post('/career', (req, res) => {
    
})


app.listen(8080, () => {
    console.log("Server running on Port 8080")
})