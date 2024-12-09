const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const User = require("./models/user");
const db = require("./db");

require("dotenv").config();
app.use(bodyParser.json());
app.use(express.json());

const cors = require("cors");

app.use(cors({
  origin: ["https://attendance-iota-coral.vercel.app"],
  methods: ["POST", "GET"],
  credentials: true
}));

app.options("*", cors());

const PORT = process.env.PORT || 3000;

app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    if (error.code === 11000) {
      // Handle duplicate key error
      res.status(400).json({
        error: "Duplicate key error",
        message: `The ${Object.keys(error.keyValue)[0]} '${
          Object.values(error.keyValue)[0]
        }' already exists.`,
      });
    } else {
      res.status(500).json({
        error: "Server error.",
        message: error.message,
      });
    }
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/dashboard/:stId", async (req, res) => {
  try {
    const { studentID, password } = req.body;

    const stId = req.params.stId;

    const user = await User.findOne({ studentID: studentID });

    if (!user) {
      return res.status(400).json({ message: "Invalid studentID" });
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    // If login is successful, generate a JWT token or proceed
    res.status(200).json({ message: "Login successful", userData: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/dashboard/:studentID", async (req, res) => {
  try {
    const studentID = req.params.studentID; // Get the studentID from the route params

    const student = await User.findOne({ studentID: studentID }); // Find student by studentID, not _id
    if (!student) {
      return res.status(404).send("Student not found");
    }

    res.json(student); // Return student data as JSON
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

app.put("/user/updateAttendance", async (req, res) => {
  const { users } = req.body;

  if (!Array.isArray(users) || users.length === 0) {
    return res.status(400).send({ error: "No users provided" });
  }

  try {
    const updatePromises = users.map((user) =>
      User.findOneAndUpdate(
        { studentID: user.studentID, role: "student" },
        { attendance: user.currentAttendance },
        { new: true }
      )
    );

    const updatedUsers = await Promise.all(updatePromises);

    const notUpdated = updatedUsers.filter((user) => !user);

    if (notUpdated.length > 0) {
      console.warn(`${notUpdated.length} users could not be updated.`);
    }

    res.status(200).send({
      message: "Attendance updated successfully",
      updatedUsers,
    });
  } catch (error) {
    console.error("Error updating attendance:", error);
    res.status(500).send({ error: "Failed to update attendance" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
