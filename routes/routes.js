const express = require(`express`)
const publicRoutes = require(`./publicRoutes`)
const dashboardRoutes = require(`./dashboardRoutes`)

const router = express.Router()

// Routes
router.get(`/`, (req, res) => {
  res.render(`index`, { title: `Home` })
})

router.use(`/public`, publicRoutes)
router.use(`/dashboard`, dashboardRoutes)

router.use((req, res)=>{
  res.status(404).render(`404`, { title: `Error` })
})
// Export
module.exports = router