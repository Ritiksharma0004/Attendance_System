import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Admin = () => {
  const [studentData, setStudentData] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [changes, setChanges] = useState(false); 
  const { id } = useParams();


  useEffect(() => {
    // Fetch individual student data when component mounts
    axios
      .get(`http://localhost:3000/dashboard/${id}`)
      .then((response) => {
        setStudentData(response.data); // Set fetched data
        setLoading(false); // End loading state
      })
      .catch((error) => {
        setError("Error fetching student data"); // Handle error
        setLoading(false); // End loading state on error
      });

  
    axios
    .get("http://localhost:3000/users")
    .then((response) => {
      // console.log("Users data:", response.data); // Check if response includes role and attendance
      if (Array.isArray(response.data)) {
        const students = response.data.filter(user => user.role === "student");
        setAllUsers(students); // Filter out non-student users
      } else {
        console.error("Unexpected response format");
        setError("Invalid response format");
      }
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      setError("Error fetching users");
    });
  

  }, [id]);

//   const updateAttendance = (userId, action) => {
//     // Find the user by ID
//     const userIndex = allUsers.findIndex(user => user.id === userId);
//     if (userIndex === -1) {
//       console.error("User not found");
//       return;
//     }
  
//     // Update attendance count
//     const updatedUsers = [...allUsers];
//     if (action === "increment") {
//       updatedUsers[userIndex].attendance += 1;
//     } else if (action === "decrement" && updatedUsers[userIndex].attendance > 0) {
//       updatedUsers[userIndex].attendance -= 1;
//     }
  
//     // Update the state
//     setAllUsers(updatedUsers);
//     setChanges(true); // Set changes flag to true
//   };

//   const saveChanges = () => {
//     const currentAttendance = studentData.attendance;
//     const studentID = studentData.studentID;
//     // Send the updated data to the server
//     axios
//   .put('http://localhost:3000/user/updateAttendance', { studentID, currentAttendance })
//   .then(response => {
//     console.log('Attendance updated successfully:', response.data);
//   })
//   .catch(error => {
//     console.error('Error updating attendance:', error.response || error);
//     setError('Error updating attendance');
//   });

//   };

const updateAttendance = (studentID, action) => {
    console.log("updateAttendance called", studentID, action); // Check if it's triggered
    const userIndex = allUsers.findIndex(user => user.studentID === studentID);
  
    // Updating attendance
    const updatedUsers = [...allUsers];
    if (action === "increment") {
      updatedUsers[userIndex].attendance += 1;
    } else if (action === "decrement" && updatedUsers[userIndex].attendance > 0) {
      updatedUsers[userIndex].attendance -= 1;
    }
  
    // console.log("Updated users list:", updatedUsers); // Check updated data
  
    setAllUsers(updatedUsers); // Update the state
    setChanges(true); // Flag for Save Changes
  };
  
//   const saveChanges = () => {
//     console.log("Save Changes clicked", studentData); // Verify if this is triggered and data is correct
//     const currentAttendance = studentData.attendance; // Get updated attendance
  
//     axios
//       .put('http://localhost:3000/user/updateAttendance', {
//         studentID: studentData.studentID,
//         currentAttendance, // Updated attendance
//       })
//       .then(response => {
//         console.log('Attendance updated successfully:', response.data);
//         setStudentData(prevData => ({ ...prevData, attendance: response.data.attendance }));
//       })
//       .catch(error => {
//         console.error('Error updating attendance:', error);
//         setError('Error updating attendance');
//       });
//   };


const saveChanges = () => {
    console.log("Save Changes clicked");
  
    // Prepare the payload with all users to be updated
    const updatedUsers = allUsers.map(user => ({
      studentID: user.studentID,
      currentAttendance: user.attendance,
    }));
  
    console.log("Users to update:", updatedUsers);
  
    // Send all updated users to the backend
    axios
      .put("http://localhost:3000/user/updateAttendance", { users: updatedUsers })
      .then(response => {
        console.log("Attendance updated successfully:", response.data);
        toast.success(`Attendance updated successfully`);
      })
      .catch(error => {
        console.error("Error updating attendance:", error);
        toast.error('Server is not responding.');
      });
  };
  
  
  

  


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col container mx-auto p-4">
      {/* Sidebar - Profile Section */}
      <div className="flex gap-6">
      <aside className="relative w-1/3 h-full bg-gradient-to-br from-white via-gray-100 to-gray-200 shadow-xl rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer">
            <div className="profile-content p-6 relative bg-white rounded-lg">
              {/* Overlay for Blur Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-50 via-white to-orange-100 backdrop-blur-lg opacity-0 rounded-lg transition-opacity duration-300 hover:opacity-100"></div>

              <div className="top flex flex-col items-center relative">
                {/* Profile Photo */}
                <div className="profile-photo w-28 h-28 overflow-hidden rounded-full shadow-md border-4 border-orange-500 mb-4">
                  <img
                    src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Name and Student ID */}
                <div className="info text-center">
                  <p className="text-2xl font-semibold text-orange-500">
                    <b>{studentData.name}</b>
                  </p>
                  <p className="text-lg text-gray-600">
                    ID: {studentData.studentID}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <hr className="my-6 border-t-2 border-orange-200" />

              {/* About Section */}
              <div className="about relative">
                {/* BTech Info */}
                <p className="text-lg font-bold text-center text-orange-700 bg-orange-100 rounded-lg py-2 shadow-md">
                  BTech. Computer Science & Engineering
                </p>

                {/* Details Section */}
                <div className="details mt-6 grid grid-cols-2 gap-6">
                  {/* Role */}
                  <div className="detail-card bg-gray-50 shadow rounded-lg p-4 flex flex-col items-center">
                    <h5 className="font-semibold text-orange-400 flex items-center">
                      <i className="fas fa-user-tag mr-2"></i> Role
                    </h5>
                    <p className="text-gray-700">{studentData.role}</p>
                  </div>

                  {/* Gender */}
                  <div className="detail-card bg-gray-50 shadow rounded-lg p-4 flex flex-col items-center">
                    <h5 className="font-semibold text-orange-400 flex items-center">
                      <i className="fas fa-venus-mars mr-2"></i> Gender
                    </h5>
                    <p className="text-gray-700">{studentData.gender}</p>
                  </div>

                  {/* Contact */}
                  <div className="detail-card bg-gray-50 shadow rounded-lg p-4 flex flex-col items-center">
                    <h5 className="font-semibold text-orange-400 flex items-center">
                      <i className="fas fa-phone-alt mr-2"></i> Contact
                    </h5>
                    <p className="text-gray-700">{studentData.phone}</p>
                  </div>

                  {/* Email */}
                  <div className="detail-card bg-gray-50 shadow rounded-lg p-4 flex flex-col items-center">
                    <h5 className="font-semibold text-orange-400 flex items-center">
                      <i className="fas fa-envelope mr-2"></i> Email
                    </h5>
                    <p className="text-gray-700">{studentData.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

        {/* Table of all students' attendance */}
        <main className="w-2/3 bg-white shadow-md rounded-lg p-6">
          <h1 className="text-xl font-bold mb-6 text-orange-600">User Attendance</h1>
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-orange-600 text-white">
                <th className="border border-gray-300 px-4 py-2">User ID</th>
                <th className="border border-gray-300 px-4 py-2">Attendance</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(allUsers) && allUsers.length > 0 ? (
                allUsers.map((user) => (
                  <tr key={user.studentID} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">{user.studentID}</td>
                    <td className="border border-gray-300 px-4 py-2">{user.attendance}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        onClick={() => updateAttendance(user.studentID, "increment")}
                        className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                      >
                        Increment
                      </button>
                      <button
                        onClick={() => updateAttendance(user.studentID, "decrement")}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Decrement
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-4">No students available</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Save Button */}
          {changes && (
            <div className="mt-4 text-center">
              <button
                onClick={saveChanges}
                className="bg-blue-500 text-white px-6 py-2 rounded"
              >
                Save Changes
              </button>
            </div>
          )}
        </main>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Admin;
