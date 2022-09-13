const User = require("../models/user");

exports.add_user = async (request, response) => {
    const user = new User(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error.message);
    }
};

exports.getAllUsers = async (request, response) => {
    const users = await User.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  };