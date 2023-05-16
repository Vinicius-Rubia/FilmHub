import React from "react";
import { useSelector } from "react-redux";

import * as C from "./styles";

interface IGenresProps {
  data: any;
}

export const Genres: React.FC<IGenresProps> = ({ data }) => {
  const { genres } = useSelector((state: any) => state.home);

  return (
    <C.Container className="genres">
      {data?.map((g: any) => {
        if (!genres[g]?.name) return;
        return (
          <div key={g} className="genre">
            {genres[g]?.name}
          </div>
        );
      })}
    </C.Container>
  );
};
