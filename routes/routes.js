const express = require(`express`)
const blogRoutes = require(`./blogRoutes`)
const userRoutes = require(`./userRoutes`)
const Blog = require(`../models/blog`)

const router = express.Router()

// Routes
router.get(`/`, (req, res) => {
  res.render(`index`)
})

router.get(`/new-blog`, (req, res)=>{
  const blog = new Blog ({
    title: `blog title 2`,
    subtitle: `blog Subtitle`,
    body: `Hey~ This is new blog body...`
  })
  blog.save()
    .then((result)=>{
      res.send(result)
    })
    .catch(err => {
      res.send(err)
    })
})

router.get(`/all-blogs`, (req, res)=>{
  Blog.find().then(result =>res.send(result)).catch(err => res.send(err))
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