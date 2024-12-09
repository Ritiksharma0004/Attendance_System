const express = require("express");
const passport = require("passport");
const LocalStratergy = require("passport-local").Strategy;
const User = require("./models/user");

passport.use(
  new LocalStratergy(async (studentID, password, done) => {
    try {
      const user = await User.findOne({ studentID: studentID });

      if (!user) return done(null, false, { message: `Invalid studentID` });

      const isPasswordMatch = await user.comparePassword(password);

      if (isPasswordMatch) return done(null, user);
      else return done(null, false, { message: `Incorrect password` });
    } catch (error) {
      return done(error);
    }
  })
);

module.exports = passport;
