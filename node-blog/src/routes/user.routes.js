const user = require('../controllers/auth.controller')

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, Content-Type, Accept"
        );
        next();
      });

    app.post('/api/user/signin', user.signin)
    
    app.post('/api/user/signup', user.signup)
}