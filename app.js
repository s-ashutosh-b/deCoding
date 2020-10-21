// * Start of app

const express = require(`express`)
const app = express()
const PORT = 7921
const router = require(`./routes/routes`)

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