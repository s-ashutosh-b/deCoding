// * Start of app

require(`dotenv`).config()
const express = require(`express`)
const app = express()
const router = require(`./routes/routes`)
const PORT = process.env.PORT

// Set up view Engine
app.set(`view engine`, `ejs`)

// Set up public folder
app.use(express.static(__dirname + '/public/'))

// Routs
app.use(router)

// Server
app.listen(PORT, () => {
  console.log(`Listining at http://localhost:${PORT}`)
})