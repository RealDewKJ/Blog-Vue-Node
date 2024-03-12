const post = require('../controllers/post.controller')

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, Content-Type, Accept"
        );
        next();
      });

    app.post('/api/post/seed', post.seed)
    app.get('/api/post', post.getPosts)
    app.get('/api/post/:id', post.getPost)

    app.post('/api/post/create', post.createPost)
}