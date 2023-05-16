import React from "react";
import PosterFallback from "../../assets/images/no-poster.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircleRating } from "../CircleRating";
import { Genres } from "../Genres/inde";
import { LazyLoadImg } from "../LazyLoadImg";
import dayjs from "dayjs";

import * as C from "./styles";

interface IMovieCard {
  data: any;
  fromSearch?: any;
  mediaType?: any;
}

export const MovieCard: React.FC<IMovieCard> = ({
  data,
  fromSearch,
  mediaType,
}) => {
  const { url } = useSelector((state: any) => state.home);
  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;

  return (
    <C.Container
      className="movieCard"
      onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
    >
      <div className="posterBlock">
        <LazyLoadImg className="posterImg" src={posterUrl} />
        {!fromSearch && (
          <>
            <CircleRating rating={data.vote_average.toFixed(1)} />
            <Genres data={data.genre_ids.slice(0, 2)} />
          </>
        )}
      </div>
      <div className="textBlock">
        <span className="title">{data.title || data.name}</span>
        <span className="date">
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </C.Container>
  );
};
