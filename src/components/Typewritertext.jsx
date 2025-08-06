// src/components/ContactSection.jsx (or a new file)

import React, { useState, useEffect } from 'react';

// The new TypewriterText component
const TypewriterText = ({ text, speed = 40, className }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    // Cleanup interval on component unmount
    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return <p className={className}>{displayedText}</p>;
};
