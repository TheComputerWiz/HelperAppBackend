const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  avatar: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  phone_number: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  example_of_work_images: {
    type: Array,
  },

});

const User = mongoose.model("User", UserSchema);

module.exports = User;