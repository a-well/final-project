import User from '../models/User'

const authenticateUser = async (req, res, next) => {
  const authHeader = req.header("Authorization") || ''
  const accessToken = authHeader.replace('Bearer ', '')
  try {
    const user = await User.findOne({ accessToken })
    if (user) {
      req.user = user
      next()
    } else {
      res.status(401).json({
        response: "You need to be signed in to access this resource. Please log in",
        success: false
      })
    }
  } catch (e) {
    console.error(e)
    res.status(400).json({
      response: e,
      success: false
    })
  }
}

module.exports = authenticateUser
