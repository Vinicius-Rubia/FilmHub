import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import * as C from "./styles";

interface ICircleRatingProps {
  rating: any;
}

export const CircleRating: React.FC<ICircleRatingProps> = ({ rating }) => {
  return (
    <C.Container className="circleRating">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
      />
    </C.Container>
  );
};
