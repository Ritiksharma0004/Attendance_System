const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  studentID: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["admin", "student"],
    default: "student",
  },
  phone: {
    type: String,  // Change from Number to String
    required: true,
  },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'], // Validate email format
    },
  gender: {
    type: String,
    required: true,
  },
 password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters long'], // Enforce a minimum length
    },
  attendance: {
    type: Number,
    default: 0
} 
});

userSchema.pre("save", async function (next) {
  const user = this;

  //check for password changed or not

  if (!user.isModified("password")) return next();

  try {
    const slat = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(this.password, slat);
    this.password = hashedPassword;

    next();
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.comparePassword = async function (userPassword) {
  try {
    const isMatch = await bcrypt.compare(userPassword, this.password);
    return isMatch;
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
