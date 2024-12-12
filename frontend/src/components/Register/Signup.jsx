import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { use } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [role, setRole] = useState("student");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      studentID,
      role,
      phone,
      email,
      gender, // Ensure gender is added here
      password,
    };

    console.log("Data to be sent:", data);  // Log the data for debugging
  axios.defaults.withCredentials = true;
    // Modify the Axios request to include the headers
    axios
      .post("https://attendance-system-5l6w.onrender.com/signup", data, {
        headers: {
          "Content-Type": "application/json", // Ensure the data is sent as JSON
        },
        body: JSON.stringify(data),
        credentials: 'include'
      })
      .then((response) => {
        console.log("Full response:", response);
        console.log("Response data:", response.data);

        toast.success(response.data.message, {
          position: "top-right",
        });
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          // Use the message from the server response
          toast.error(error.response.data.message, {
            position: "top-right",
          });
        }
      });
  };







    
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-black text-center mb-6">
            Registration Form
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Full Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your full name"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Student ID */}
            <div className="mb-4">
              <label htmlFor="studentID" className="block text-gray-700 mb-2">
                Student ID
              </label>
              <input
                type="text"
                id="studentID"
                name="studentID"
                required
                pattern="[A-Za-z0-9]{5,10}"
                maxLength={7}
                placeholder="Enter your Student ID"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                onChange={(e) => setStudentID(e.target.value)}
              />
            </div>

            {/* Role */}
            <div className="mb-4">
              <label htmlFor="role" className="block text-gray-700 mb-2">
                Role
              </label>
              <select
                id="role"
                name="role"
                required
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="student">Student</option>
              </select>
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                maxLength={10}
                minLength={10}
                placeholder="Enter your phone number"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Gender */}
            <div className="mb-4">
              <label htmlFor="gender" className="block text-gray-700 mb-2">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                required
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Password */}
            <div className="mb-6 col-span-2">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter your password"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit */}
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  );
}

export default Signup;
