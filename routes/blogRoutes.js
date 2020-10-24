const express = require(`express`)
const blogController = require(`../controllers/blogController`)
const router = express.Router()

// Routes
router.get(`/profile`, blogController.profile)
router.get(`/article`, blogController.article)

// Export
module.exports = router