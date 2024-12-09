const express = require("express");
const router = express.Router();
const User = require("./../models/user");
const { jwtAuthMiddleware, generateToken } = require("./../jwt");

// Route for handling form POST
// router.post("/post", async (req, res) => {
//   try {
//     const { name, studentID, role, phone, email, gender, password } = req.body;

//     // Creating a new user instance
//     const user = new User({
//       name,
//       studentID,
//       role,
//       phone,
//       email,
//       gender,
//       password,
//     });

//     // Saving the user to the database

//     await user.save();
//     // console.log(user);

//     res.redirect("/success");
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// router.get('/login', async (req, res) => {
//   try {
//     const {studentID, password} = req.body;
//     const data = await User.findOne({studentID: studentID});
//     res.json(studentID);
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

router.get('/login/:studentID', async (req,res) =>{
  try {
     studentID = req.params.studentID;

     const student = await User.findById(studentID);
     res.send(studentID);

  } catch (error) {
    console.log(error)
  }
})

router.post('/dashboard', async (req, res) => {
  try {
    const { studentID, password } = req.body;
    const studentI= req.params.studentI ;


    // Find the user in the database by studentID
    const user = await User.findOne({ studentID: studentID });

    if (!user) {
      return res.send('<script>alert("Invaild studentID"); window.location.href = "/login.html"; </script>');
    }

    // Check if password is correct using the comparePassword method
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return res.send('<script>alert("Invaild Password"); window.location.href = "/login.html"; </script>');
    }

    // Generate a JWT token if login is successful
    res.redirect('/studentDash.html')

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});















module.exports = router;
