// Navbar.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="/#"]');

    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(2);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  }, []);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="https://e7.pngegg.com/pngimages/527/235/png-clipart-red-and-white-r-logo-logo-graphy-r-web-design-company-thumbnail.png" alt="Logo" className="h-8 w-8 mr-2 rounded-lg" />
        </Link>
        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/#skills" className="text-white">Skills</Link>
          <Link to="/#projects" className="text-white">Projects</Link>
          <Link to="/#coding-profiles" className="text-white">CodingProfiles</Link>
          <Link to="/#contact" className="text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

