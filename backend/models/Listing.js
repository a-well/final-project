import mongoose from "mongoose"

const ListingSchema = new mongoose.Schema({
  pokemonId:{
    type: String,
    required: true
  },
  pokemonName: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: [
      'wanted',
      'looking-for-a-new-home'
    ]
  },
  shiny: {
    type: Boolean
  },
  description: {
    type: String,
  }
})
const Listing = mongoose.model("Listing", ListingSchema)

module.exports = Listing