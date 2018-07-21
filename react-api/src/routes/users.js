import express from "express";
import User from "../models/User";
import parseErrors from "../utils/parseErrors";

const router = express.Router();

router.post('/', (req, res) => {
  const { email, password } = req.body.user;
  // we dont pass password in user instance creation because in user model we have passwordHash
  const user = new User({ email });
  // we define setPassword function and pass password to it
  user.setPassword(password);
  user
    .save()
    .then(userRecord => {
      res.json({ user: userRecord.toAuthJSON() });
    })
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
});

export default router;

 // commented lines here didn't work , most probable reason no '{' after  .then(userRecord  // check
// import express from 'express';
// import User from '../models/User';
// import parseErrors from '../utils/parseErrors';
// const router = express.Router();

// router.post('/', (req, res) => {
//     const {email , password} = req.body.user;
//     // we dont pass password in user instance creation because in user model we have passwordHash
//     const user = new User({email});
//     // we define setPassword function and pass password to it
//     user.setPassword(password);
//     user.save() // returns promise
//         .then(userRecord =>  res.json({user: userRecord.toAuthJson()}))
//         .catch(err=> res.status(400).json({errors: parseErrors(err.errors)}));
// });

// export default router;