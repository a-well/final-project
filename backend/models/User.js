import crypto from "crypto"
import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex")
  },
  createdAt: {
    type: Date,
    default: () => new Date()
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true
  },
  whatsApp: {
    type: String
  },
  facebook: {
    type: String
  },
  about: {
    type: String
  },
  poGoLevel: {
    type: String
  },
  poGoUsername: {
    type: String
  },
  trainerCode: {
    type: String
  },
  location: {
    type: String,
    required: true
  }
})
const User = mongoose.model("User", UserSchema)

module.exports = User