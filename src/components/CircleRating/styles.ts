import styled from "styled-components";

export const Container = styled.div`
  &.circleRating {
    background-color: ${({theme}) => theme.black};
    border-radius: 50%;
    padding: 2px;

    .CircularProgressbar-text {
      font-size: 34px;
      font-weight: 700;
      fill: ${({theme}) => theme.black};
    }

    .CircularProgressbar-trail {
      stroke: transparent;
    }
  }
`;
