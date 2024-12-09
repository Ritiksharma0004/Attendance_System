import React from "react";

function Contact() {
  const contacts = [
    {
      name: "Ritik Sharma",
      email: "Ritik.sde.sharma@gmail.com",
      phone: "876981xxx",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Devansh Khandelwal",
      email: "devansh.khandelwal@example.com",
      phone: "+1 987 654 3210",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Ritesh Singh",
      email: "ritesh.singh@example.com",
      phone: "+1 456 789 0123",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side: Full-Height Image */}
      <div className="w-1/2 h-screen">
        <img
          src="https://images.pexels.com/photos/760728/pexels-photo-760728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Contact Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side: Contact Information */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-start p-16">
        <h1 className="text-4xl font-extrabold text-black mb-10">Get in Touch</h1>
        <div className="space-y-8 w-full">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex items-center space-x-6 p-6 bg-gradient-to-r from-orange-100 to-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={contact.image}
                alt={contact.name}
                className="w-20 h-20 rounded-full border-2 border-orange-500 shadow-md"
              />
              <div>
                <h2 className="text-2xl font-semibold text-black">
                  {contact.name}
                </h2>
                <p className="text-gray-700 mt-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-orange-600 hover:underline"
                  >
                    {contact.email}
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong>{" "}
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-orange-600 hover:underline"
                  >
                    {contact.phone}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
