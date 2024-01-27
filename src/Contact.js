// Contact.js
import React from 'react';
import {  FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import MailLink from './MailLink';

const Contact = () => {
  const emailAddress = 'kujurraghubir18@gmail.com';
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center">
        {/* Social Media Icons */}
        <div className="mr-12">
        <MailLink emailAddress={emailAddress} text="Email" />

          <a
            href='https://www.linkedin.com/in/raghubir-k-859495243/'
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mr-4"
          >
            <FaLinkedin className="inline-block mr-2" /> LinkedIn
          </a>
          <a
            href='https://github.com/Raghubir8'
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mr-4"
          >
            <FaGithub className="inline-block mr-2" /> GitHub
          </a>
          <a
               href="https://wa.me/+916265573271"

             target="_blank"
             rel="noopener noreferrer"
             className="text-blue-500 hover:underline"
         >
  <FaWhatsapp className="inline-block mr-2" /> WhatsApp
</a>
        </div>

        {/* Contact Form */}
      </div>
    </div>
  );
};

export default Contact;
