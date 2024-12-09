import React from "react";

export default function About() {
  return (
    <div className="relative h-screen w-full">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/3288307/3288307-uhd_2560_1440_30fps.mp4" // Replace with your university's promotional video URL
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="text-center px-6 text-white">
          <h1 className="text-3xl sm:text-6xl font-bold mb-6 text-orange-700">
            Welcome to University X
          </h1>
          <p className="text-lg sm:text-xl mb-4">
            Our university is equipped with state-of-the-art facilities designed to provide
            the best learning environment for our students.
          </p>
          <p className="text-lg sm:text-xl">
            From modern classrooms, advanced laboratories, and a vast digital library to
            sports complexes, cultural centers, and student lounges, we are committed to
            fostering academic excellence and personal growth.
          </p>
        </div>
      </div>
    </div>
  );
}

