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

// Moved routes etc from here to separate files in order to make code more readable and debuggable
//  folders:
// - models: Define model for database: Listing, User
// - middlewares: Handle authorization for the API routes
// - routes
//   auth.js: Handle authentication for users (registration, sign in, forgot login details)
//   listings.js: Handle listings: adding, removal and searching 
//   users.js: Handle user profiles