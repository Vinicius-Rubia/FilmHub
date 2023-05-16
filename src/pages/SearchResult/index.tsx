import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
// import noResults from "../../assets/no-results.png";

import { fetchDataFromAPI } from "../../services/api";
import { ContentWrapper } from "../../components/ContentWrapper";
import { Spinner } from "../../components/Spinner";
import { MovieCard } from "../../components/MovieCard";

import * as C from "./styles";

export const SearchResult: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [pageNum, setPageNum] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromAPI(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      }
    );
  };

  const fetchNextPageData = () => {
    fetchDataFromAPI(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);
  return (
    <C.Container>
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data?.total_results > 1 ? "results" : "result"
                } of '${query}'`}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results.map((item: any, index: number) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">Sorry, Results not found!</span>
          )}
        </ContentWrapper>
      )}
    </C.Container>
  );
};
