import React, { useState, useEffect } from 'react';
import "./Wrapper.css"

const Wrapper = (props) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Add event listener to window to check if user has scrolled enough to show back to top button
    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Check if user has scrolled more than 200 pixels from the top of the page
    if (window.pageYOffset > 200) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  const handleBackToTop = () => {
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="wrapper" id="wrapper">
      {showBackToTop && (
        <button className='btn ' onClick={handleBackToTop}>
          back
        </button>
      )}
      {props.children}
    </div>
  )
}

export default Wrapper
