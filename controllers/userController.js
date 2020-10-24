exports.dashboard = function (req, res) {
  res.render(`dashboard`)
}
exports.article = function (req, res) {
  res.render(`control_articles`)
}
exports.savedPosts = function (req, res) {
  res.render(`control_saved_posts`)
}
exports.analytics = function (req, res) {
  res.render(`control_analytics`)
}
exports.blogSettings = function (req, res) {
  res.render(`control_settings`)
}