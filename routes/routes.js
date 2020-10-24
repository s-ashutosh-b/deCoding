const express = require(`express`)
const blogRoutes = require(`./blogRoutes`)
const userRoutes = require(`./userRoutes`)

const router = express.Router()

// Routes
router.get(`/`, (req, res) => {
  res.render(`index`)
})

router.get(`/login`, (req, res) => {
  res.render(`login`)
})

router.use(`/blog`, blogRoutes)
router.use(`/user`, userRoutes)

router.use((req, res)=>{
  res.status(404).render(`404`, { title: `Error`, content: `404` })
})
// Export
module.exports = router