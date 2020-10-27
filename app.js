// * Start of app

require(`dotenv`).config()
const express = require(`express`)
const router = require(`./routes/routes`)
const mongoose = require(`mongoose`)

const app = express()
const PORT = process.env.PORT

// Set up view Engine
app.set(`view engine`, `ejs`)

// Connect Database
const USER_NAME = process.env.USER_NAME
const PASSWORD = process.env.PASSWORD
const DATABASE_NAME = process.env.DATABASE_NAME
//console.log(USER_NAME, PASSWORD, DATABASE_NAME)

mongoose.connect(`mongodb://${USER_NAME}:${PASSWORD}@cluster0-shard-00-00.pxs2w.mongodb.net:27017,cluster0-shard-00-01.pxs2w.mongodb.net:27017,cluster0-shard-00-02.pxs2w.mongodb.net:27017/${DATABASE_NAME}?ssl=true&replicaSet=atlas-14nipb-shard-0&authSource=admin&retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true },)
  .then((result) => {
    console.log(`Connected to database: ${DATABASE_NAME}`)
    // Server
    app.listen(PORT, () => {
      console.log(`Listining at http://localhost:${PORT}`)
    })
  })
  .catch(err => console.log(`__error__`, err))

// Set up public folder
app.use(express.static(__dirname + '/public/'))

// Routs
app.use(router)