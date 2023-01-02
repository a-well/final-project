import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import bodyParser from 'body-parser'

import listingsRoutes from "./routes/listings"
import usersRoutes from "./routes/users"
import authRoutes from "./routes/auth"

// Connect to database
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project"
mongoose.set('strictQuery', false)
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

app.use(authRoutes)
app.use(usersRoutes)
app.use(listingsRoutes)

app.get("/api/pokemon.json", (req, res) => {
  // @TODO read pokemons from pokemons.json
  res.send("Fetch pokemons available for listings")
})

app.get("/", (req, res) => {
  res.send("Final Project")
})

// Route for testing error message
app.get('/always-error', (req, res) => {
  throw new Error('this is a error that always happens on /always-error')
  res.send('Always error')
})

module.exports = app