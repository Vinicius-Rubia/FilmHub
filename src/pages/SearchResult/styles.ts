import styled from "styled-components";

export const Container = styled.div`
  min-height: 700px;
  padding-top: 100px;

  .resultNotFound {
    font-size: 24px;
    color: ${({ theme }) => theme["black-light"]};
  }

  .pageTitle {
    font-size: 24px;
    line-height: 34px;
    color: white;
    margin-bottom: 25px;
  }

  .content {
    display: flex;
    flex-flow: row wrap;
    gap: 10px;
    margin-bottom: 50px;

    @media (min-width: 768px) {
      gap: 20px;
    }

    .movieCard {
      .posterBlock {
        margin-bottom: 20px;
      }
    }
  }
`;
