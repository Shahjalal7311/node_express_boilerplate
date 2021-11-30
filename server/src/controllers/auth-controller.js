const express = require("express");
const bcrypt = require('bcrypt')
const rounds = 10
const jwt = require('jsonwebtoken')
const tokenSecret = "node_js_boiler"

const {
  getUser
} = require("../services/auth-service");
const { NotFound } = require("../utils/errors");
const router = express.Router();

const getHandler = async (req, res, next) => {
  
  try {
      const email = req.body.email;
      const user = await getUser( email );
      if( !user ){
        throw new NotFound("User not found by the email: " + req.body.email);
      }else{
        bcrypt.compare(req.body.password, user.passwordHash, (error, match) => {
          if( error ){
            res.status(500).send('user not found');
          }else if( match ){
            res.status(200).send({ token: generateToken(user)} );
          }else{
            res.status(403).send('passwords do not match');
          } 
      })
    }
  } catch (error) {
      return next(error, req, res);
  }
};

function generateToken(user){
  return jwt.sign({data: user}, tokenSecret, {expiresIn: '72h'})
}

router.get("/", getHandler);

module.exports = router;