import React, { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { ContentWrapper } from "../../../components/ContentWrapper";
import { SwitchTabs } from "../../../components/SwitchTabs";
import { Carousel } from "../../../components/Carousel/inde";
import * as C from "../Trending/styles";

export const Popular: React.FC = () => {
  const [endpoint, setEndpoint] = useState<string>("movie");

  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab: string) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <C.Container className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </C.Container>
  );
};
