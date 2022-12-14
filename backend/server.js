import app from './app'

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080

// Start the server
app.listen(port, (err) => {
  if (err) {
    console.error(err)
  }
  console.log(`Server running on http://localhost:${port}`)
})
