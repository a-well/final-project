import express from "express"
import authenticateUser from '../middlewares/authenticateUser'
import Listing from '../models/Listing'

const router = express.Router()

router.get("/api/listings", async (req, res) => {
  const listings = await Listing.find()
  res.status(200).json(listings)
})

router.get("/api/listings/:id", async (req, res) => {
  const listing = await Listing.findById(req.params.id)
  res.status(200).json(listing)
})

router.post('/api/listings', authenticateUser)
router.post("/api/listings", async (req, res) => {
  const { description, pokemonId, /* ... and more here */ } = req.body

  console.log({description, pokemonId})
  try {
    const newListing = await new Listing({description, pokemonId}).save()
    res.status(201).json({success: true, response: newListing})
  } catch (e) {
    console.error(e)
    res.status(400).json({success: false, response: e})
  }
})

router.delete('/api/listings/:id', authenticateUser)
router.delete("/api/listings/:id", async (req, res) => {
  res.send('Delete individual listing')
})

router.patch('/api/listings/:id', authenticateUser)
router.patch("/api/listings/:id", async (req, res) => {
  res.send('Edit individual listing')
})

router.get("/api/listings-search", async (req, res) => {
  res.send('Search listings')
})

module.exports = router