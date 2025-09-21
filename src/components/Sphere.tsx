"use client";

import React, { useEffect, useState } from 'react';

const Sphere = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const items = Array.from({ length: 32 }, (_, i) => i + 1);
  const half = items.length / 2;

  return (
    <div className="sphere-container">
      <div className="sphere">
        {items.map((item) => {
          let transform;
          if (item < half) {
            transform = `rotateY(${(360 / items.length) * item}deg)`;
          } else {
            transform = `rotateX(${(360 / items.length) * item}deg)`;
          }
          return <i key={item} style={{ transform }} />;
        })}
      </div>
    </div>
  );
};

export default Sphere;
