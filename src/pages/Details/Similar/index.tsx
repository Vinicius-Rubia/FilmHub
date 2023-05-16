import React from "react";
import { Carousel } from "../../../components/Carousel/inde";
import { useFetch } from "../../../hooks/useFetch";

interface ISimilar {
  mediaType: any;
  id: any;
}

export const Similar: React.FC<ISimilar> = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);

  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    <Carousel
      title={title}
      data={data?.results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};
