import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import { Carousel } from "../../../components/Carousel/inde";

interface IRecomendation {
  mediaType: any;
  id: any;
}

export const Recommendation: React.FC<IRecomendation> = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/recommendations`);

  return (
    <Carousel
      title="Recommendations"
      data={data?.results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};
