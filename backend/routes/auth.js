
import express from 'express'
import bcrypt from "bcrypt"
import User from '../models/User'

const router = express.Router()

// Handle user registration
router.post("/api/auth/register", async (req, res) => {
  // Get username and password from user input
  const { username, emailAddress, password, about, location, whatsApp, facebook, poGoUsername, trainerCode, poGoLevel } = req.body

  try {
    // Generate salt for password encryption (https://en.wikipedia.org/wiki/Salt_(cryptography))
    const salt = bcrypt.genSaltSync()
    if (password.length < 10) {
      res.status(400).json({
        success: false,
        response: "Password must be at least 10 characters long"
      })
    } else {
      // Insert new user to database and encrypt password
      const newUser = await new User({
        username,
        password: bcrypt.hashSync(password, salt),
        emailAddress,
        location,
        about,
        whatsApp, 
        facebook,
        poGoUsername, 
        trainerCode, 
        poGoLevel
      }).save()
      res.status(201).json({
        success: true,
        user: newUser
      })
    }
  } catch(e) {
    console.log(e)
    res.status(400).json({
      success: false,
      response: e
    })
  }
})

// Handle user log in
router.post("/api/auth/login", async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({username})
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        success: true,
        response: {
          user,
          accessToken: user.accessToken
        }
      })
    } else {
      res.status(400).json({
        success: false,
        response: "Credentials did not match. Please make sure you entered the correct username and password and try again."
      })
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      response: e
    })
  }
})

// Handle forgotten password
// @TODO add funcionality for forgotten password
router.post("/api/auth/forgot-password", async (req, res) => {
  const { email } = req.body
  console.log('forgot password')
  console.log({email})
  // to do later:
  // find user with that email
  // generate a new password 
  // set that password to the user
  // send an email to the email address informing that the password been sent

  res.send(`Your password has been sent to the email you entered.`)
})

module.exports = router