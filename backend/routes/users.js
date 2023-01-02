
import express from 'express'
import authenticateUser from '../middlewares/authenticateUser'
import User from '../models/User'

const router = express.Router()

// Display users own profile
router.get('/api/users/me', authenticateUser)
router.get('/api/users/me', async (req, res) => {
  res.status(200).json(req.user)
})

//Display profile of user by username
router.get('/api/users/:username', authenticateUser)
router.get("/api/users/:username", async (req, res) => {
  const { username } = req.params

  const user = await User.findOne({ username })

  if (!user) {
    return res.status(404).json({
      error: 'User not found'
    })
  }

  res.status(200).json(user)
})

module.exports = router