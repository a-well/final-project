import express from "express"
import authenticateUser from '../middlewares/authenticateUser'
import Listing from '../models/Listing'
import { getPokemonById } from '../libs/pokemon'

const router = express.Router()

// Display all listings (defaults to 20 most recent)
router.get("/api/listings", async (req, res) => {
  const limit = req.query.limit || 20
  const listingType = req.query.type 
  const username = req.query.username 

  const searchQuery = {}
  if (listingType) {
    searchQuery["type"] = listingType
  }

  if (username) {
    searchQuery["username"] = username
  }

  console.log(searchQuery)

  const listings = await Listing.find(searchQuery).sort({ createdAt: -1 }).limit(limit) 
  console.log(listings)
  res.status(200).json(listings)
})

// Display listing by ID
router.get("/api/listings/:id", async (req, res) => {
  const listing = await Listing.findById(req.params.id)
  if (listing) {
    res.status(200).json(listing)
  } else {
    res.status(404).json({success: false, error: 'No such listing found'})
  }
})

// Handle creating a new listing
router.post('/api/listings', authenticateUser)
router.post("/api/listings", async (req, res) => {
  const { pokemonId, type = 'wanted', location, shiny, description } = req.body

  const pokemon = getPokemonById(pokemonId)
  const pokemonName = pokemon.name
  const pokemonImage = pokemon.image
  const pokemonImageShiny = pokemon.imageShiny
  
  const userId = req.user.id
  const username = req.user.username

  console.log(username)

  console.log({userId, username, pokemonId, pokemonName, pokemonImage, pokemonImageShiny, type, location, shiny, description})

  try {
    const newListing = await new Listing({
      userId, username, pokemonId, pokemonName, pokemonImage, pokemonImageShiny, type, location, shiny, description
    }).save()
    res.status(201).json(newListing)
  } catch (e) {
    console.error(e)
    res.status(400).json(e)
  }
})

// Handle deletion of a listing
router.delete('/api/listings/:id', authenticateUser)
router.delete("/api/listings/:id", (req, res) => {
  const id = req.params.id
  Listing.findByIdAndDelete(id, (err) => {
    if (err){
      res.status(400).json({ success: false, error })
    } else{
      res.status(200).json({ success: true, message: 'Successfully deleted listing with id :' + req.params.id})
    }
  })
})

// This can be used later if edit support is needed
// router.patch('/api/listings/:id', authenticateUser)
// router.patch("/api/listings/:id", async (req, res) => {
//   res.send('Edit individual listing')
// })

// Handle searching in listings
router.get("/api/listings-search", async (req, res) => {
  res.send('Search listings')
})

module.exports = router