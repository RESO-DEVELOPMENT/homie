import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './Arrows.module.css';

const Arrows = ({ sliderRef }) => {
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className={styles.buttons}>
      <div className={styles.prevB}>
        <button
          type="button"
          role="presentation"
          className="custom-prev-button"
          onClick={handlePrev}
        >
          <FaChevronLeft className={styles.leftA} />
        </button>
      </div>
      <div className={styles.nextB}>
        <button
          type="button"
          role="presentation"
          className="custom-next-button"
          onClick={handleNext}
        >
          <FaChevronRight className={styles.rightA} />
        </button>
      </div>
    </div>
  );
};

export default Arrows;
