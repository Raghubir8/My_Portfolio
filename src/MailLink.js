// MailLink.js

import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const MailLink = ({ emailAddress, text }) => {
  return (
    <a
      href={`mailto:${emailAddress}`}
      className="text-blue-500 hover:underline mr-4"
    >
      <FaEnvelope className="inline-block mr-2" />
      {text}
    </a>
  );
};

export default MailLink;
