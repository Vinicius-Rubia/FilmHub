import React, { useEffect, useState, FormEvent } from "react";

import { ContentWrapper } from "../../../components/ContentWrapper";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectHome } from "../../../redux/homeSlice";
import { LazyLoadImg } from "../../../components/LazyLoadImg";
import { useFetch } from "../../../hooks/useFetch";

import * as C from "./styles";

export const HeroBanner: React.FC = () => {
  const [background, setBackground] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();
  const { url } = useSelector(selectHome);

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    query.length > 0 && navigate(`/search/${query}`);
  };

  return (
    <C.Container>
      {!loading && (
        <div className="backdrop-img">
          <LazyLoadImg src={background} />
        </div>
      )}

      <C.OpacityLayer />

      <ContentWrapper>
        <C.Content>
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <C.Form onSubmit={searchQueryHandler}>
            <input
              type="text"
              placeholder="Search for a movie or tv show..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <button>Search</button>
          </C.Form>
        </C.Content>
      </ContentWrapper>
    </C.Container>
  );
};
