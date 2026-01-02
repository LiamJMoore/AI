import React, { useState, useRef } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: any;
}

const CHARS = '!@#$%^&*()_+-=[]{}|;:",./<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", as: Tag = 'span' }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    let iteration = 0;
    
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }

      iteration += 1 / 3;
    }, 30);
  };

  const handleMouseLeave = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setDisplayText(text);
  }

  return (
    <Tag className={`${className} cursor-default inline-block`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {displayText}
    </Tag>
  );
};

export default GlitchText;