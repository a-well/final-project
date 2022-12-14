import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import bodyParser from 'body-parser'

import listingsRoutes from "./routes/listings"
import usersRoutes from "./routes/users"
import authRoutes from "./routes/auth"

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
  res.send("Fetch pokemons available for listings")
})

app.get("/", (req, res) => {
  res.send("Final Project")
})

module.exports = app