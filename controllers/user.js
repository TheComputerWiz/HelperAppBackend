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

exports.update_user = async (request, response) => {
  const { _id, name, phone_number, email, password, address, avatar, username, example_of_work_images } = request.body;

  User.findByIdAndUpdate(_id, 
    { _id, name, phone_number, email, password, address, avatar, username, example_of_work_images },
    function (err, docs) {
      if (err){
          response.json({data:err})
      }
      else{
          response.json({data:docs})
      }
    });
};

exports.getAllUsers = async (request, response) => {
    const users = await User.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  };