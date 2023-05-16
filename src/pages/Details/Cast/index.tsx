import React from "react";
import { useSelector } from "react-redux";
import { ContentWrapper } from "../../../components/ContentWrapper";
import { LazyLoadImage } from "react-lazy-load-image-component";

import avatar from "../../../assets/images/avatar.png";

import * as C from"./styles";

interface ICast {
  data: any;
  loading: any;
}

export const Cast: React.FC<ICast> = ({ data, loading }) => {
  const { url } = useSelector((state: any) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <C.Container className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div className="listItems">
            {data?.map((item: any) => {
              let imgUrl = item.profile_path
                ? url.profile + item.profile_path
                : avatar;
              return (
                <div key={item.id} className="listItem">
                  <div className="profileImg">
                    <LazyLoadImage src={imgUrl} />
                  </div>
                  <div className="name">{item.name}</div>
                  <div className="character">{item.character}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </C.Container>
  );
};
