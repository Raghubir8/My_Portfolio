// Home.js
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Home = () => {
  const [typedContent, setTypedContent] = useState('');

  const finalContent =
    "I am currently pursuing my integrated dual degree in Pharmaceutical Engineering at IIT BHU. My academic journey has equipped me with strong skills in C, C++, Python and Javascript programming languages, along with a solid foundation in data structures, algorithms, and computer fundamentals.";

  useEffect(() => {
    // Simulate typing effect
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedContent(finalContent.substring(0, index));
      index++;

      // Stop when the entire content is typed
      if (index > finalContent.length) {
        clearInterval(typingInterval);
      }
    }, 50);

    // Clean up the interval on component unmount
    return () => clearInterval(typingInterval);
  }, [finalContent]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row p-4 md:p-8 lg:p-16">
        {/* Content */}
        <img
          src='https://i.pinimg.com/564x/0f/01/e4/0f01e47911bc4b6154514bbab79b090c.jpg'
          alt='Software Engineer'
          className="h-auto w-full md:w-1/2 mb-4 md:mb-0 md:mr-4"
        />
        <div className='md:w-1/2'>
          <h1 className="text-5xl font-bold text-green-800 mb-4">HI, I AM RAGHUBIR!</h1>
          <p className="text-black text-lg font-serif">
            {typedContent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

