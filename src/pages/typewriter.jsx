import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < texts[currentTextIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + texts[currentTextIndex][currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentTextIndex(currentTextIndex + 1 >= texts.length ? 0 : currentTextIndex + 1);
        setCurrentIndex(0);
        setCurrentText('');
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, texts]);

  return <span>{currentText}</span>;
};
export default Typewriter;