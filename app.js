// * start of app

const express = require(`express`)
const app = express()
const PORT = 7921

// Set up view Engine
app.set(`view engine`, `ejs`)

// Set up public folder
app.use(express.static(__dirname + '/public/'))
app.get(`/`, (req, res) => {
  res.render(`index`)
})

app.listen(PORT, () => {
  console.log(`Listining at http://localhost:${PORT}`)
})