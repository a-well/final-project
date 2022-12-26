
import express from 'express'
import bcrypt from "bcrypt"
import User from '../models/User'

const router = express.Router()

router.post("/api/auth/register", async (req, res) => {
  const { username, password } = req.body
  console.log({username, password})

  try {
    const salt = bcrypt.genSaltSync()
    if (password.length < 10) {
      res.status(400).json({
        success: false,
        response: "Passord must be at least 10 characters long"
      })
    } else {
      const newUser = await new User({username, password: bcrypt.hashSync(password, salt)}).save()
      res.status(201).json({
        success: true,
        response: {
        username: newUser.username,
        accessToken: newUser.accessToken,
        id: newUser._id
        }
      })
    }
  } catch(e) {
    res.status(400).json({
    success: false,
    response: e
    })
  }
})

router.post("/api/auth/login", async (req, res) => {
  const { username, password } = req.body

  console.log('login')
  console.log({username, password})

  try {
    const user = await User.findOne({username})
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        success: true,
        response: {
        username: user.username,
        id: user._id,
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

router.post("/api/auth/forgot-password", async (req, res) => {
  const { email } = req.body
  console.log('forgot password')
  console.log({email})
  res.send('forgot password will be here')
})

module.exports = router