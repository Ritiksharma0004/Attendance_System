// import axios from "axios";
// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";

// function Dashboard() {

//   const [studentname,setStudentName] = useState('')
//   const [studentId,setStudentId] = useState(null)

//   const [studentData, setStudentData] = useState('john');  // State to store fetched data
//   const [loading, setLoading] = useState(true);  // Loading state
//   const [error, setError] = useState(null);  // Error state

//   const { id } = useParams();

//   // axios
//   //   .get(`http://localhost:3000/dashboard/${id}`)
//   //   .then((response) => {
//   //     console.log(response.data);  // Log the full response data for debugging
//   //     setStudentData(response.data);  // Set fetched data to state
//   //     setLoading(false);
//   //   })
//   //   .catch((error) => {
//   //     setError('Error fetching student data');
//   //     setLoading(false);  // Set loading to false on error
//   //     console.error(error)
//   //   });

//   useEffect(() => {
//     // Only fetch data once when the component mounts
//     axios
//       .get(`http://localhost:3000/dashboard/${id}`)
//       .then((response) => {
//         console.log(response.data); // Log data to check
//         setStudentData(response.data); // Set data to state
//         setLoading(false); // End the loading state
//       })
//       .catch((error) => {
//         setError('Error fetching student data'); // Handle error
//         setLoading(false); // End the loading state on error
//       });
//   }, [id]); // `id` is the only dependency here, it will only re-fetch if `id` changes

//   return (
//     <div className="flex container mx-auto p-4">
//     {/* Sidebar */}
//     <aside className="w-1/4 bg-gray-800 shadow-md rounded-lg p-4 text-white">
//       {/* Profile Section */}
//       <div className="profile">
//         <div className="top flex flex-col items-center">
//           {/* Profile Photo */}
//           <div className="profile-photo w-24 h-24 overflow-hidden rounded-full bg-orange-600 mb-4">
//             <img
//               src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           {/* Name and Student ID */}
//           <div className="info text-center">
//             <p className="text-xl font-semibold text-orange-500">Hey, <b>{studentData.name}</b></p>
//             <p className="text-lg">{studentData.studentID}</p>
//           </div>
//         </div>

//         {/* About Section */}
//         <div className="about mt-6 space-y-4">
//           <p className="text-gray-400">BTech. Computer Science & Engineering</p>
//           <div>
//             <h5 className="font-semibold text-orange-400">Role</h5>
//             <p className="text-gray-300">{studentData.role}</p>
//           </div>
//           <div>
//             <h5 className="font-semibold text-orange-400">Gender</h5>
//             <p className="text-gray-300">{studentData.gender}</p>
//           </div>
//           <div>
//             <h5 className="font-semibold text-orange-400">Contact</h5>
//             <p className="text-gray-300">{studentData.phone}</p>
//           </div>
//           <div>
//             <h5 className="font-semibold text-orange-400">Email</h5>
//             <p className="text-gray-300">{studentData.email}</p>
//           </div>
//         </div>
//       </div>
//     </aside>

//     {/* Main Content */}
//     <main className="w-3/4 bg-white shadow-md rounded-lg p-6 ml-6">
//       <h1 className="text-xl font-bold mb-6 text-orange-600">Attendance</h1>
//       <div className="grid grid-cols-2 gap-6">
//         {/* Subject Cards go here */}
//       </div>
//     </main>

//   </div>

//   );
// }

// export default Dashboard;

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Admin from "../Admin/Admin";

function Dashboard() {
  const [studentData, setStudentData] = useState({}); // State to store fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [showAttendance, setShowAttendance] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    // Fetch student data when component mounts
    axios
      .get(`https://attendance-system-front.onrender.com/dashboard/${id}`)
      .then((response) => {
        setStudentData(response.data); // Set fetched data
        setLoading(false); // End loading state
      })
      .catch((error) => {
        setError("Error fetching student data"); // Handle error
        setLoading(false); // End the loading state on error
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Random subjects for the timetable
  const subjects = [
    "Math",
    "Physics",
    "Chemistry",
    "CS Lab",
    "English",
    "Biology",
    "History",
  ];

  const randomSubject = () => {
    return subjects[Math.floor(Math.random() * subjects.length)];
  };

  if (id == "admin123") {
    return <Admin />;
  } else {
    return (
      <div className="flex flex-col container mx-auto p-4  ">
        {/* Profile and Attendance Sections (Beside each other) */}
        <div className="flex gap-6">
          {/* Sidebar - Profile Section */}
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

          {/* Main Content - Attendance Section */}
          <main className="w-2/3 bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <h1 className="text-6xl font-bold mb-3 -mt-56 text-orange-600">
              Attendance
            </h1>

            {/* Toggle Attendance Message */}
            <div className="flex flex-col items-center translate-y-40">
              <button
                onClick={() => setShowAttendance(!showAttendance)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition-all duration-300 mb-4"
              >
                View Attendance
              </button>
              {showAttendance && (
                <>
                  {studentData.attendance > 75 ? (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative animate-pop">
                      <strong className="font-bold">Great Job!</strong>
                      <span className="block sm:inline">
                        {" "}
                        Your attendance is {studentData.attendance}%. Keep it up!
                      </span>
                    </div>
                  ) : (
                    <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative animate-pop">
                      <strong className="font-bold">Warning!</strong>
                      <span className="block sm:inline">
                        Your attendance is {studentData.attendance}%. Please
                        improve it.
                      </span>
                    </div>
                  )}
                </>
              )}
            </div>
          </main>
        </div>
        <section className="mt-6 text-gray-700 shadow-md rounded-lg p-6 bg-gradient-to-br from-white via-gray-50 to-gray-100">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4 text-center sparkle-heading">
            Announcements
          </h2>

          <div className="announcement-container space-y-6">
            {/* Announcement 1 */}
            <div className="announcement bg-orange-100 p-4 rounded-lg shadow-md hover:scale-105">
              <h3 className="text-xl font-semibold text-orange-500">
                New Semester Begins!
              </h3>
              <p className="text-gray-700 mt-2">
                The new semester begins on January 15th. Make sure to check your
                timetable and complete all necessary pre-semester tasks before
                the start date.
              </p>
            </div>

            {/* Announcement 2 */}
            <div className="announcement bg-blue-100 p-4 rounded-lg shadow-md hover:scale-105">
              <h3 className="text-xl font-semibold text-blue-500">
                Hackathon Registration Open
              </h3>
              <p className="text-gray-700 mt-2">
                The registration for the annual hackathon is now open! Teams of
                up to 4 can register by visiting the hackathon website.
              </p>
            </div>

            {/* Announcement 3 */}
            <div className="announcement bg-green-100 p-4 rounded-lg shadow-md hover:scale-105">
              <h3 className="text-xl font-semibold text-green-500">
                Guest Lecture: AI and ML
              </h3>
              <p className="text-gray-700 mt-2">
                A guest lecture on Artificial Intelligence and Machine Learning
                will be held on December 10th. RSVP for the event.
              </p>
            </div>

            {/* Announcement 4 */}
            <div className="announcement bg-red-100 p-4 rounded-lg shadow-md hover:scale-105">
              <h3 className="text-xl font-semibold text-red-500">
                Library Maintenance
              </h3>
              <p className="text-gray-700 mt-2">
                The library will be closed for maintenance from December 12th to
                14th. Please plan your visits accordingly.
              </p>
            </div>

            {/* Announcement 5 */}
            <div className="announcement bg-yellow-100 p-4 rounded-lg shadow-md hover:scale-105">
              <h3 className="text-xl font-semibold text-yellow-500">
                Winter Break Schedule
              </h3>
              <p className="text-gray-700 mt-2">
                The winter break will begin on December 20th and continue until
                January 5th. Enjoy your holidays!
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;
