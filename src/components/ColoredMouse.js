import React, { useEffect } from 'react';
import '../styles/ColoredMouse.scss';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    let timeout;

    const handleMouseMove = (e) => {
      cursor.style.top = `${e.pageY}px`;
      cursor.style.left = `${e.pageX}px`;
      cursor.style.display = "block";

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cursor.style.display = "none";
      }, 1000);
    };

    const handleMouseOut = () => {
      cursor.style.display = "none";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default CustomCursor;

