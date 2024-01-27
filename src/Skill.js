import React from "react";

const Skill = () => {
  return (
    <section id="Skill" className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Skill Card 1 */}
        <div className="p-4 bg-pink-100 rounded shadow mb-4">
          <h3 className="text-xl font-semibold mb-2">Programming</h3>
          <ul className="list-disc pl-6">
            <li>C</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </div>

        {/* Skill Card 2 */}
        <div className="bg-blue-100 p-4 rounded shadow mb-4">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <ul className="list-disc pl-6">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>Socket.io</li>
          </ul>
        </div>

        {/* Skill Card 3 */}
        <div className="bg-yellow-100 p-4 rounded shadow mb-4">
          <h3 className="text-xl font-semibold mb-2">Data Structures</h3>
          <ul className="list-disc pl-6">
            <li>Arrays</li>
            <li>Trees</li>
            <li>Graphs</li>
            <li>Dynamic Programing</li>
            <li>Linked Lists</li>
            <li>Stack</li>
            <li>Queue</li>
          </ul>
        </div>

        {/* Skill Card 4 */}
        <div className="bg-green-100 p-4 rounded shadow mb-4">
          <h3 className="text-xl font-semibold mb-2">Leadership</h3>
          <p>Team Management, Communication</p>
        </div>
      </div>
    </section>
  );
};

export default Skill;
