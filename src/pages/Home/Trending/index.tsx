import React, { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { ContentWrapper } from "../../../components/ContentWrapper";
import { SwitchTabs } from "../../../components/SwitchTabs";
import { Carousel } from "../../../components/Carousel/inde";

import * as C from "./styles";

export const Trending: React.FC = () => {
  const [endpoint, setEndpoint] = useState<string>("day");

  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

  const onTabChange = (tab: string) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  return (
    <C.Container className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </C.Container>
  );
};
