import styled from "styled-components";

export const Container = styled.div`
  &.explorePage {
    min-height: 700px;
    padding-top: 100px;

    .resultNotFound {
      font-size: 24px;
      color: ${({ theme }) => theme["black-light"]};
    }

    .pageHeader {
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row;
      }
    }

    .pageTitle {
      font-size: 24px;
      line-height: 34px;
      color: white;
      margin-bottom: 20px;

      @media (min-width: 768px) {
        margin-bottom: 0;
      }
    }

    .filters {
      display: flex;
      gap: 10px;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row;
      }

      .react-select-container {
        &.genresDD {
          width: 100%;

          @media (min-width: 768px) {
            max-width: 500px;
            min-width: 250px;
          }
        }

        &.sortbyDD {
          width: 100%;
          flex-shrink: 0;

          @media (min-width: 768px) {
            width: 250px;
          }
        }

        .react-select__control {
          border: 0;
          outline: 0;
          box-shadow: none;
          background-color: ${({ theme }) => theme["black-light"]};
          border-radius: 20px;

          .react-select__value-container {
            .react-select__placeholder,
            .react-select__input-container {
              color: white;
              margin: 0 10px;
            }
          }

          .react-select__single-value {
            color: white;
          }

          .react-select__multi-value {
            background-color: ${({ theme }) => theme.black3};
            border-radius: 10px;

            .react-select__multi-value__label {
              color: white;
            }

            .react-select__multi-value__remove {
              background-color: transparent;
              color: white;
              cursor: pointer;

              &:hover {
                color: ${({ theme }) => theme["black-lighter"]};
              }
            }
          }
        }

        .react-select__menu {
          top: 40px;
          margin: 0;
          padding: 0;
        }
      }
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
          margin-bottom: 30px;
        }
      }
    }
  }
`;
