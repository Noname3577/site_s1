import React, { useState, useEffect } from "react";
import styles from "./SlideBox.module.css";

const SlideBox = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("next");
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
  };

  return (
    <div className={styles.slideBox}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} 
                      ${index === currentSlide ? styles.active : ""} 
                      ${
                        direction === "next"
                          ? styles.slideNext
                          : styles.slidePrev
                      }`}
        >
          <div className={styles.content}>{slide.content}</div>
        </div>
      ))}
      <div className={styles.dots}>
        {slides.map((_, dotIndex) => (
          <button
            key={dotIndex}
            className={`${styles.dot} ${
              dotIndex === currentSlide ? styles.activeDot : ""
            }`}
            onClick={() => handleDotClick(dotIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideBox;
