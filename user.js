var mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  __v: {
    type: Number,
    select: false
  },
  /*_id:{
    type: Number,
    select: false
  },*/
  name: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  }
})

var UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel;