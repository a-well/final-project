import mongoose from "mongoose"

const ListingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  username: {
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
  pokemonImage: {
    type: String,
    required: true
  },
  pokemonImageShiny: {
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

ListingSchema.index({
  username: 'text',
  pokemonName: 'text',
  location: 'text',
  description: 'text'
}, { 
  username: 10,
  location: 10,
  pokemonName: 20,
  description: 5 
})

const Listing = mongoose.model("Listing", ListingSchema)



module.exports = Listing