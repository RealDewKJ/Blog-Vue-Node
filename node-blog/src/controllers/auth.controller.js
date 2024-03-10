const { Op } = require("sequelize");
const db = require("../model");
const User = db.user;
const jwt = require ("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signin = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
      const user = await User.findOne({
        where: {
            email: email,
        },
      });
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
  
      const passwordIsValid = bcrypt.compareSync(
        password,
        user.password
      );
  
      if (!passwordIsValid) {
        return res.status(401).send({
          message: "Invalid Password!",
        });
      }
      res.send(generateTokenResponse(user))
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  };

exports.signup = async (req, res) => {
    try {
        const user = await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
            isAdmin: 0
        })
        await user.save()
        if (user) res.send({ message: "User registered successfully!" });
       
    } catch(err) {
        return res.status(500).send({ message: err.message });
    }
}

  const generateTokenResponse = (user) =>{
    const token = jwt.sign({
     id:user.id, email:user.email, isAdmin:user.isAdmin, firstname:user.firstname, lastname: user.lastname
    },"SecretKeyDew", {
       expiresIn:"1d"
    });
    user.dataValues.token = token;
    console.log('user',user)
    return user;
   }