import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';

const schema = new mongoose.Schema({
    email: {type: String, required: true, lowercase:true , index:true , unique:true},
    passwordHash : {type: String, required:true },
    confirmed : {type: Boolean, default:false}
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
          confirmed: this.confirmed,
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

schema.methods.setPassword = function setPassword(password){
    this.passwordHash = bcrypt.hashSync(password,10);
};

// add uniquness and email validation to email field
// to add it we install and import mongoose-unique-validator

schema.plugin(uniqueValidator, { message: 'This email is already taken'}); // add unique:true to model

export default mongoose.model('User',schema);