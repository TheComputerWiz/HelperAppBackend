const User = require("../models/user");
var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

exports.add_user = async (request, response) => {
    const { name, phone_number, email, password, address } = request.body
    // Validate user input
    if (!(email && password && name && phone_number)) {
      response.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    const user = new User({name, phone_number, email:email.toLowerCase(), password: encryptedPassword, address});

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;
  
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