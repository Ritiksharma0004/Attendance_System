import React from "react";

const TimeTable = () => {
  const schedule = [
    {
      day: "Monday",
      subjects: [
        { time: "9:00 AM - 10:00 AM", subject: "Mathematics" },
        { time: "10:00 AM - 11:00 AM", subject: "Physics" },
        { time: "11:00 AM - 12:00 PM", subject: "Computer Science" },
        { time: "1:00 PM - 2:00 PM", subject: "Chemistry" },
        { time: "2:00 PM - 3:00 PM", subject: "English" },
      ],
    },
    {
      day: "Tuesday",
      subjects: [
        { time: "9:00 AM - 10:00 AM", subject: "Data Structures" },
        { time: "10:00 AM - 11:00 AM", subject: "Electronics" },
        { time: "11:00 AM - 12:00 PM", subject: "Mathematics" },
        { time: "1:00 PM - 2:00 PM", subject: "Physics Lab" },
        { time: "2:00 PM - 3:00 PM", subject: "Computer Science" },
      ],
    },
    {
      day: "Wednesday",
      subjects: [
        { time: "9:00 AM - 10:00 AM", subject: "Operating Systems" },
        { time: "10:00 AM - 11:00 AM", subject: "Mathematics" },
        { time: "11:00 AM - 12:00 PM", subject: "Data Structures Lab" },
        { time: "1:00 PM - 2:00 PM", subject: "Physics" },
        { time: "2:00 PM - 3:00 PM", subject: "Chemistry" },
      ],
    },
    {
      day: "Thursday",
      subjects: [
        { time: "9:00 AM - 10:00 AM", subject: "Database Management" },
        { time: "10:00 AM - 11:00 AM", subject: "Mathematics" },
        { time: "11:00 AM - 12:00 PM", subject: "Physics" },
        { time: "1:00 PM - 2:00 PM", subject: "English" },
        { time: "2:00 PM - 3:00 PM", subject: "Data Structures" },
      ],
    },
    {
      day: "Friday",
      subjects: [
        { time: "9:00 AM - 10:00 AM", subject: "Artificial Intelligence" },
        { time: "10:00 AM - 11:00 AM", subject: "Physics" },
        { time: "11:00 AM - 12:00 PM", subject: "Mathematics" },
        { time: "1:00 PM - 2:00 PM", subject: "English" },
        { time: "2:00 PM - 3:00 PM", subject: "Computer Science" },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-orange-600 text-center mb-8">
        BTech Student Time Table
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {schedule.map((daySchedule, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <h2 className="text-xl font-semibold text-white bg-orange-500 p-4">
              {daySchedule.day}
            </h2>
            <ul className="p-4 space-y-4">
              {daySchedule.subjects.map((subject, subIndex) => (
                <li
                  key={subIndex}
                  className="flex justify-between items-center border-b last:border-b-0 pb-2"
                >
                  <span className="text-gray-800 font-medium">{subject.time}</span>
                  <span className="text-orange-500">{subject.subject}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeTable;
