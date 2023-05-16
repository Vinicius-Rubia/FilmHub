import React from "react";

import * as C from "./styles";

interface ISpinner {
  initial?: any;
}

export const Spinner: React.FC<ISpinner> = ({ initial }) => {
  return (
    <C.Container className={`loadingSpinner ${initial ? "initial" : ""}`}>
      <svg className="spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </C.Container>
  );
};
