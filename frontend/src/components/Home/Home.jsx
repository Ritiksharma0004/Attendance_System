import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Hero Section */}
      <section className="relative text-blue-800 rounded-lg mx-auto my-10 p-8 sm:p-16">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8"> {/* Added gap-8 for spacing between text and image */}
          <div className="sm:w-1/2 text-center sm:text-left sm:ml-16"> {/* Added margin for spacing */}
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              <span className="text-orange-700">Welcome to University X</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-700">
              Discover a world of opportunities with cutting-edge research, world-class facilities, and a vibrant campus community.
            </p>
          </div>
          <div className="sm:w-1/2">
            <img
              src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg"
              alt="University Campus"
              className="rounded-lg shadow-md w-full sm:max-w-lg" 
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="max-w-screen-lg mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center">
            About University X
          </h2>
          <p className="mt-6 text-lg text-center text-gray-700">
            At University X, we are committed to excellence in education, innovation, and community engagement. Our programs are designed to empower students with the skills they need to thrive in a rapidly changing world.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <img
                src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Library"
                className="w-full rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold">State-of-the-Art Library</h3>
              <p className="mt-2 text-gray-600">
                Explore our extensive collection of resources and study in a modern, peaceful environment.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <img
                src="https://images.pexels.com/photos/6208696/pexels-photo-6208696.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Laboratory"
                className="w-full rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold">Advanced Labs</h3>
              <p className="mt-2 text-gray-600">
                Hands-on learning in cutting-edge laboratories equipped with the latest technology.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <img
                src="https://images.pexels.com/photos/1369490/pexels-photo-1369490.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Sports Facilities"
                className="w-full rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold">Sports & Recreation</h3>
              <p className="mt-2 text-gray-600">
                Engage in diverse sports and recreational activities in our world-class facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-700 text-white">
        <div className="max-w-screen-lg mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Be a Part of the Legacy
          </h2>
          <p className="mt-4 text-lg">
            Join the thousands of students who have shaped their future at University X. Start your journey today.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
