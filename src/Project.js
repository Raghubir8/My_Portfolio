// Project.js
import React from 'react';

const Project = () => {
  const redirectToProfile = (profileUrl) => {
    window.open(profileUrl, '_blank');
  };
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
            src='https://i.pinimg.com/564x/d9/5c/d0/d95cd04d85043401df2b957eeba934cd.jpg'
            alt="Project 1"
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Online Car Rental Web App</h3>
              <p className="text-gray-700 mb-4">
               An online car rental web application is a digital platform that allows users to easily rent and manage their car reservations through the internet. Users can browse a catalog of available vehicles, view details such as model, features, and pricing, and make reservations online
              </p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={() => redirectToProfile('https://car-pro-i7mz.vercel.app/')}>Know More </button>
                
               </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://i.pinimg.com/564x/f0/02/ab/f002ab9eee9881e70dd3872484f70f39.jpg"
              alt="Project 2"
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Group Chat Web Application</h3>
              <p className="text-gray-700 mb-4">
              A Group Chat Web Application is a digital platform that facilitates real-time communication and collaboration among multiple users within a group or community. It enables users to exchange messages, multimedia content, and engage in discussions in a shared virtual space. 
              </p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={() => redirectToProfile('https://web-chat-application-sandy.vercel.app/')}>Know More </button>
            </div>
          </div>

          {/* Add more project cards as needed */}
          {/* Project Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://i.pinimg.com/564x/69/12/80/691280d4bb1b90a00f38167208fe5a84.jpg"
              alt="Project 1"
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Coaching Web Application</h3>
              <p className="text-gray-700 mb-4">
              A Coaching Web Application tailored for IIT JEE (Indian Institutes of Technology Joint Entrance Examination) and NEET (National Eligibility cum Entrance Test) preparation would provide a comprehensive platform to support students in their exam preparation.
              </p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={() => redirectToProfile('https://srijan-coaching-institute-web.vercel.app/')}>Know More </button>
            </div>
          </div>
          {/* Project Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://i.pinimg.com/564x/85/72/45/8572455775aa46387b86414f40169421.jpg"
              alt="Project 1"
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Online Passward Generator</h3>
              <p className="text-gray-700 mb-4">            
              An Online Password Generator is a tool that creates strong, secure, and random passwords for users. It helps individuals and organizations generate unique passwords that are difficult to guess, enhancing overall cybersecurity.
              </p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={() => redirectToProfile('https://passward-generator-ruddy.vercel.app/')}>Know More </button>
            </div>
          </div>
          {/* Project Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://media.istockphoto.com/id/1140180560/photo/colored-powder-explosion-on-black-background.jpg?s=612x612&w=0&k=20&c=gH_tj4MVWr0226qcq_uJ4nxfLTKG-7T29rtUklT4Obk="
              alt="Project 1"
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Background Color Changer</h3>
              <p className="text-gray-700 mb-4">
               The Background Color Changer is a simple yet interactive web application that allows users to dynamically alter the background color of a webpage with just a click. It's a delightful and engaging way to experiment with different color combinations and add a touch of personalization to the visual experience.
              </p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={() => redirectToProfile('https://bg-color-changer-beta.vercel.app/')}>Know More </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
