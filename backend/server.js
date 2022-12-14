import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import crypto from "crypto"
import bcrypt from "bcrypt"
import bodyParser from 'body-parser'

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project"
mongoose.set('strictQuery', false)
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

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
  }
})

const User = mongoose.model("User", UserSchema)

app.post("/api/auth/register", async (req, res) => {
  const { username, password } = req.body
  console.log('register')
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

app.post("/api/auth/login", async (req, res) => {
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

app.post("/api/auth/forgot-password", async (req, res) => {
  const { email } = req.body
  console.log('forgot password')
  console.log({email})
  res.send('forgot password will be here')
})





const authenticateUser = async (req, res, next) => {
  const authHeader = req.header("Authorization") || ''
  console.log({authHeader})
  const accessToken = authHeader.replace('Bearer ', '')
  console.log({accessToken})
  try {
    const user = await User.findOne({accessToken})
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

app.get('/api/auth/users/me', authenticateUser)
app.get('/api/auth/users/me', async (req, res) => {
  res.status(200).send('this will show your profile later, you have successfully signed in now.')
})

app.get("/api/pokemon.json", (req, res) => {
  res.send("Fetch pokemons available for listings")
})

// const ThoughtSchema = new mongoose.Schema({
//   message: {
//     type: String,
//     required: true
//   },
//   createdAt: {
//     type: Date,
//     default: () => new Date()
//   },
//   hearts: {
//     type: Number,
//     default: 0
//   }
// })

// const Thought = new mongoose.model("Thought", ThoughtSchema)

// Return all the thoughts
// app.get("/thoughts", authenticateUser)
// app.get("/thoughts", async (req, res) => {
//   const thoughts = await Thought.find({})
//   res.status(200).json({success: true, response: thoughts})
// })

// app.post("/thoughts", authenticateUser)
// app.post("/thoughts", async (req, res) => {
//   const { message } = req.body

//   console.log({message})
//   try {
//     const newThought = await new Thought({message}).save()
//     res.status(201).json({success: true, response: newThought})
//   } catch (e) {
//     console.error(e)
//     res.status(400).json({success: false, response: e})
//   }
// })

app.get("/api/listings", (req, res) => {
  res.send("Return all listiings")
})

app.post('/api/auth/listings', authenticateUser)
app.post("/api/auth/listings", async (req, res) => {
  res.send('Create new listing will be here')
})

app.get("/api/listings/:id", async (req, res) => {
  res.send('Get individual listing')
})

app.delete('/api/auth/listings/:id', authenticateUser)
app.delete("/api/auth/listings/:id", async (req, res) => {
  res.send('Delete individual listing')
})

app.patch('/api/auth/listings/:id', authenticateUser)
app.patch("/api/auth/listings/:id", async (req, res) => {
  res.send('Edit individual listing')
})

app.get('/api/auth/users/:username', authenticateUser)
app.get("/api/auth/users/:username", async (req, res) => {
  res.send('Get info about user and the listings they have up')
})

app.get("/api/listings-search", async (req, res) => {
  res.send('Search listings')
})


// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Final Project")
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
