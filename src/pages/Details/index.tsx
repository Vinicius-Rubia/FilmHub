import React from "react";

import * as C from "./styles";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Cast } from "./Cast";
import { Similar } from "./Similar";
import { Recommendation } from "./Recommendation";
import { DetailsBanner } from "./DetailsBanner";
import { VideosSection } from "./VideosSection";

export const Details: React.FC = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <C.Container>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </C.Container>
  );
};
