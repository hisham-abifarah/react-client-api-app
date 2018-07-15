import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// add uniquness and email validation to email field
const schema = new mongoose.Schema({
    email: {type: String, required: true, lowercase:true , index:true},
    passwordHash : {type: String, required:true }
}, {timestamps:true});

schema.methods.isValidPassword = function isValidPassword(password) {
    return bcrypt.compareSync(password, this.passwordHash);
  };

  // create object we want to pass down to our client, we don't to pass down whole user record, like passwordHash
  // and in auth.js if user is validated we don't want to return res.json({user: {email : user.email}})
  // cause if we want to change it we have to find it in all routes
  schema.methods.toAuthJSON = function toAuthJSON(){
      return {
          email: this.email,
          token: this.generateJWT()
      }
  };

  // .sign() create and encrypt webtoken
schema.methods.generateJWT = function generateJWT() {
    return jwt.sign({
        email: this.email
    },
        process.env.JWT_SECRET // for encryption
    )
};

export default mongoose.model('User',schema);

