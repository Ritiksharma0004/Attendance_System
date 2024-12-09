import axios, { Axios } from "axios";
import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function Login() {

 

  const [studentID,setStudentID] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()


  const handleClick = (e) => {
    e.preventDefault()

    const data = {
      studentID,
      password,
    }

   

  //   axios
  // .post('http://localhost:3000/dashboard', {
  //   studentID,  // Send studentID in the request body
  //   password,   // Send password in the request body
  // })
  // .then((response) => {
  //   console.log("Full response:", response);
  //   if (response.status === 200) {
  //     console.log("User data:", response.data); 
  //     window.location.href = "/dashboard";
  //   }
  // })
  // .catch((error) => {
  //   console.error("Error in Axios request:", error);
  //   if (error.response) {
  //     console.error("Response error data:", error.response.data);
  //     // Show an alert or handle the error based on the message
  //     if (error.response.data.message === "Invalid Password") {
  //       alert("Incorrect password!");
  //     } else if (error.response.data.message === "Invalid studentID") {
  //       alert("Invalid student ID!");
  //     }
  //   }
  // });



  axios
  .post(`http://localhost:3000/dashboard/${studentID}`, { studentID, password })
  .then((response) => {
    if (response.status === 200) {
      const userData = response.data.userData;
      console.log("User data before redirect:", userData);
      window.location.href = `http://localhost:5173/dashboard/${studentID}/`;
    }
  })
  .catch((error) => {
    console.error("Error in Axios request:", error);
    if (error.response) {
      toast.error('Invalid credentials, please try again.');
    }
  });







  }


  
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-orange-700 text-center mb-6">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-600 mb-6">Please sign in to continue.</p>
        <form action="/student/dashboard" method="POST">
          {/* Student ID */}
          <div className="mb-6">
            <label htmlFor="studentID" className="block text-gray-700 mb-2">
              User ID
            </label>
            <input
              type="text"
              id="studentID"
              name="studentID"
              required
              placeholder="Enter your student ID"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
              onChange={(e)=> setStudentID(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-6">
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
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="mb-6">
            <button
            onClick={handleClick}
              type="submit"
              className="w-full py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all"
            >
              Login
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Register Now
                </NavLink>
          </p>
        </form>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-gray-500">
        &copy; 2024 Attendance Management System. All rights reserved.
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
