const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
  name: {
      type: String,
      required: [true, "Please enter your name"],
      maxLength: [30, "Name can not exceed 30 characters"],
      minLength: [3, "Name can not less than 3 characters"],
  },
  email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      validate: [validator.isEmail, "Please exter a valid email"],
  },
  password: {
      type: String,
      required: [true, "Please entre your password"],
      minLength: [8, "Password should be greater than 8 characters"],
      select: false
  },
  price: {
      type: Number,
      require: [true, "Please entre product price"],
      maxLength: [8, "Max character limit exceed"]
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

module.exports = mongoose.model("User", userSchema);
