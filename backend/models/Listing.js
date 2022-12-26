import mongoose from "mongoose"

const ListingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
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
    ],
    default: 'wanted'
  },
  location: {
    type: String,
    required: true
  },
  shiny: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
  },  
  createdAt: {
    type: Date,
    default: () => new Date()
  }

})
const Listing = mongoose.model("Listing", ListingSchema)

module.exports = Listing