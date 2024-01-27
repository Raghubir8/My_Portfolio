import React from 'react';

const CodingProfiles = () => {
  const redirectToProfile = (profileUrl) => {
    window.open(profileUrl, '_blank');
  };

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-indigo-700">Coding Platforms Profiles</h2>

      {/* LeetCode Profile */}
      <div className="mb-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-2 md:mb-0">
          <img src='https://cdn.iconscout.com/icon/free/png-512/free-leetcode-3628885-3030025.png?f=webp&w=256' alt="LeetCode Logo" className="h-8 w-8 mr-4 rounded-lg" />
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">LeetCode</h3>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => redirectToProfile('https://leetcode.com/Raghubir/')}>
          View
        </button>
      </div>

      {/* GeeksforGeeks Profile */}
      <div className="mb-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-2 md:mb-0">
          <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200617163105/gfg-logo.png" alt="GeeksforGeeks Logo" className="w-8 h-8 mr-4 rounded-lg" />
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">GeeksforGeeks</h3>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => redirectToProfile('https://auth.geeksforgeeks.org/user/raghubirstudentphe19')}>
          View
        </button>
      </div>

      {/* Codeforces Profile */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-2 md:mb-0">
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3629285-3031869.png" alt="Codeforces Logo" className="w-8 h-8 mr-4" />
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Codeforces</h3>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => redirectToProfile('https://codeforces.com/profile/RK_O_')}>
          View
        </button>
      </div>
    </div>
  );
};

export default CodingProfiles;
