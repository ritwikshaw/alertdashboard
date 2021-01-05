const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    values: {
       type: Number,
       required: true,
    },
    days:{
        type: String,
        required: true,
    },
    criteria:{
      type: String,
      required: true,
    }
})
 const User = mongoose.model('User', UserSchema)
 module.exports = User