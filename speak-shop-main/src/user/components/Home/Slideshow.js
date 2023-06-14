import React, { useEffect, useState } from "react";
import { Slice } from "../../../assets";
import "./Slideshow.scss";
const slides = [Slice.slice1, Slice.slice2, Slice.slice3];
const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setIndex((prev) => {
        if (prev === slides.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 3000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div>
      <img className="Home__slideWrapper" src={slides[index]} alt=""></img>
    </div>
  );
};

export default Slideshow;
