import User from '../models/User'

const authenticateUser = async (req, res, next) => {
  const authHeader = req.header("Authorization") || ''
  console.log({authHeader})
  const accessToken = authHeader.replace('Bearer ', '')
  console.log({accessToken})
  try {
    const user = await User.findOne({ accessToken })
    if (user) {
      console.log('user found: ', user)
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
