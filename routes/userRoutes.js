const express = require(`express`)
const userController = require(`../controllers/userController`)
const router = express.Router()

// Routes
router.get(`/dashboard`, userController.dashboard)
router.get(`/control_articles`, userController.article)
router.get(`/control_saved_posts`, userController.savedPosts)
router.get(`/control_analytics`, userController.analytics)
router.get(`/control_settings`, userController.blogSettings)
// Export
module.exports = router