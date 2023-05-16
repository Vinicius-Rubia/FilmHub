import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ILazyLoadImage {
  src: string;
  className?: string;
}

export const LazyLoadImg: React.FC<ILazyLoadImage> = ({ src, className }) => {
  return (
    <LazyLoadImage className={className || ""} alt="" effect="blur" src={src} />
  );
};
