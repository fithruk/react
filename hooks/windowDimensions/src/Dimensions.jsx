import React, { useState, useEffect } from "react";

const Dimensions = () => {
  const [innerWidth, setInnerWidth] = useState(0);
  const [innerHeight, setInnerHeigth] = useState(0);

  const getSize = () => {
    const { innerHeight, innerWidth } = window;
    setInnerWidth(innerWidth);
    setInnerHeigth(innerHeight);
  };

  useEffect(() => {
    getSize();
    window.addEventListener("resize", getSize);
    return () => {
      window.removeEventListener("resize", getSize);
    };
  }, [innerHeight, innerWidth]);

  return (
    <div className="dimensions">
      {innerWidth}px - {innerHeight}px
    </div>
  );
};

export default Dimensions;
