import React from "react";
import { HeroBanner } from "./HeroBanner";
import { Trending } from "./Trending";
import { Popular } from "./Popular";
import { TopRated } from "./TopRated";

export const Home: React.FC = () => {
  return (
    <div>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};
