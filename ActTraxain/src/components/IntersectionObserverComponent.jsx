import React, { useEffect, useRef, useState } from 'react';

const IntersectionObserverComponent = ({ targetRef, onVisible }) => {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onVisible(true);
        } else {
          onVisible(false);
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.5} // Adjust threshold as needed
    );

    if (targetRef.current) {
      observer.current.observe(targetRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [targetRef, onVisible]);

  return <div ref={targetRef}  style={{ backgroundColor:"blue"}} />;
};

export default IntersectionObserverComponent;