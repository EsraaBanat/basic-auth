'use strict';
const express = require('express');
const { Users } = require("../auth/models/index");
const bcrypt=require('bcrypt');
const userRouter = express.Router();
const basicAuthentication = require("../auth/middleware/basic");


userRouter.get('/',home); 
// Signup Route -- create a new user
userRouter.post('/signup',signUp); 

// Signin Route -- login with username and password
userRouter.post('/signin',basicAuthentication(Users),signIn );



// Functions :

function home(req, res) {
  res.status(200).send('Hello Its my basic server to practice authentication');
}

async function signUp (req, res)  {

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
    res.status(201).json(record);
  } catch (e) { res.status(403).send('Error in Creating User'+ e); }
}


function signIn(req, res) {
  //  console.log(req.user);
    res.status(200).json(req.user);
 }

module.exports = userRouter;